import { getServerSession} from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //console.log("PRODUCT DATA=>", req.body);
  const session = await getServerSession(req, res, authOptions)
  switch (req.method) {
    case "POST":
      if(!session){
        return res.status(401).json({error:'Unauthorized'});
      }
      try {
        const data = await prisma.product.create({ data: req.body });
        return res
          .status(200)
          .json({ message: "Product Creted Successfully!", body: data });
      } catch (error) {
        return res
          .status(500)
          .json({
            message: "Error while trying to create a new product",
            error: error,
          });
      }
    case "PUT":
      if(!session){
        return res.status(401).json({error:'Unauthorized'});
      }
      try {
        const data = await prisma.product.update({
          where: { id: Number(req.query.id) },
          data: {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
          },
        });
        return res
          .status(200)
          .json({ message: "Product Updated Successfully!", body: data });
      } catch (error) {
        return res
          .status(500)
          .json({
            message: "Error while trying to update the product",
            error: error,
          });
      }
    case "DELETE":
      if(!session){
        return res.status(401).json({error:'Unauthorized'});
      }
      try{
        const data = await prisma.product.delete({
          where: { id: Number(req.query.id) }
        });
        return res.status(200).json({message:"Product Deleted Successfully!", body:data});
      }catch(error){
        return res.status(500).json({message:"Error while trying to delete the product", error:error})
      }
    default:
     
      const { category } = req.query;
      if (!category || category.length === 0) {
        try {
          const data = await prisma.product.findMany();
          return res.status(200).json(data);
        } catch (error) {
          return res.status(500).json(error);
        }
      } else {
        try {
          const data = await prisma.product.findMany({
            where: { category: category as string },
          });
          return res.status(200).json(data);
        } catch (error) {
          return res.status(500).json(error);
        }
      }
  }
}
