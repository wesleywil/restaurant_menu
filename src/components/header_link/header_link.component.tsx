"use client";

import Link from "next/link";

type HeaderLinkProps = {
  name: string;
  path: string;
};

const HeaderLink = ({ name, path }: HeaderLinkProps) => {
  return (
    <li className="bg-[#4aba2e] text-xl text-[#1b1c1f] hover:bg-[#e1d498] font-bold px-2 rounded-t-xl ">
      <Link href={path}>{name}</Link>
    </li>
  );
};

export default HeaderLink;
