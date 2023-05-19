"use client";

import { motion } from "framer-motion";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] });

const HomeBrand = () => {
  return (
    <div
      className={`mt-[-5rem] text-center text-[#e1d498] text-6xl flex justify-center gap-2 ${parisienne.className}`}
    >
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        Holy
      </motion.h1>
      <motion.h1
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        Fork
      </motion.h1>
    </div>
  );
};

export default HomeBrand;
