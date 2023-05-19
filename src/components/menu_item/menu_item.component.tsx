"use client";

import { motion } from "framer-motion";

import { Product } from "@/utils/product_type/product_type";

const MenuItem = (product: Product) => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="w-4/5 px-2 mx-auto flex gap-4 text-xl"
    >
      <div>
        <h1 className="text-[#4aba2e]">{product.name}</h1>
        <p className="w-96 h-24 text-[#b9ae7b] text-sm">
          {product.description}
        </p>
      </div>
      <h1 className="w-52 font-semibold text-[#4aba2e]">$ {product.price}</h1>
    </motion.div>
  );
};

export default MenuItem;
