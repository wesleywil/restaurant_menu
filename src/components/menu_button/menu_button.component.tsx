"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuButtonProps = {
  name: string;
  path: string;
};

const MenuButton = ({ name, path }: MenuButtonProps) => {
  const router = usePathname();
  return (
    <li
      className={`bg-white text-black font-bold px-2 rounded-t-xl ${
        router.startsWith(path) ? "bg-red-300" : "hover:text-slate-400"
      }`}
    >
      <Link href={path}>{name}</Link>
    </li>
  );
};

export default MenuButton;
