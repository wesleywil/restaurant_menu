"use client";

import { motion } from "framer-motion";

const HomeTitle = () => {
  return (
    <div
      className={`mt-8 flex flex-col items-center gap-2 justify-center text-[#4aba2e] text-9xl   `}
    >
      <motion.h1
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        FOOD
      </motion.h1>
      <motion.h1
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        MENU
      </motion.h1>
      <motion.div
        initial={{ scale: "0%" }}
        animate={{ scale: "100%" }}
        transition={{
          delay: 1,
        }}
        className="w-full border-b-4 border-[#4aba2e]"
      ></motion.div>
    </div>
  );
};

export default HomeTitle;
