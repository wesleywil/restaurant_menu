"use client";

import Link from "next/link";

type HeaderLinkProps = {
  name: string;
  path: string;
};

const HeaderLink = ({ name, path }: HeaderLinkProps) => {
  return (
    <li className="bg-white text-black hover:text-slate-400 font-bold px-2 rounded-t-xl ">
      <Link href={path}>{name}</Link>
    </li>
  );
};

export default HeaderLink;
