import axios from "axios";

export async function getProducts(category?:string) {
  const res = await axios.get(`http://localhost:3000/api/products?category=${category}`)
   return res.data;
  }