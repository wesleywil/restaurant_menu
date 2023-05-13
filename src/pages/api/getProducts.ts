import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
   if(req.method === "GET"){
    console.log('REQ QUERY', req.query);
    const { category} = req.query
    if(!category||category.length === 0){
        try{
            const data = await prisma.product.findMany()
            return res.status(200).json(data)
        }catch(error){
            return res.status(500).json(error)
        }
    }else{
        try{
            const data = await prisma.product.findMany({where:{category:category as string}})
            return res.status(200).json(data)
        }catch(error){
            return res.status(500).json(error)
        }
    }
        
   }
}