import Link from "next/link";
import Image from "next/image";
import HeaderLink from "../header_link/header_link.component";

const Header = () => {
  return (
    <header className="pt-2 px-2 bg-[#1b1c1f] flex flex-col gap-2 items-center justify-center drop-shadow-lg">
      <Link href="/" className=" rounded-full">
        <Image src="/fk_logo.webp" alt="Logo" width={48} height={48} />
      </Link>

      <ul className="flex gap-4">
        <HeaderLink name="Starter" path="/starter" />
        <HeaderLink name="Salad" path="/salad" />
        <HeaderLink name="Main Dishes" path="/main_dishes" />
        <HeaderLink name="Beverages" path="/beverages" />
        <HeaderLink name="Dessert" path="/dessert" />
      </ul>
    </header>
  );
};

export default Header;
