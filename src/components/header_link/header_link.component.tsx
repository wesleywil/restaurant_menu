"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type HeaderLinkProps = {
  name: string;
  path: string;
};

const HeaderLink = ({ name, path }: HeaderLinkProps) => {
  const pathName = usePathname();
  return (
    <motion.li
      initial={{ scaleX: 0 }}
      animate={{ scaleX: "100%" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={` text-xl text-[#1b1c1f] hover:bg-[#e1d498] font-bold px-2 rounded-t-xl ${
        pathName === path ? "bg-[#4aba2e] " : "bg-white"
      }`}
    >
      <Link href={path}>{name}</Link>
    </motion.li>
  );
};

export default HeaderLink;
