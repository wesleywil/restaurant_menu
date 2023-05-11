import Link from "next/link";
import HeaderLink from "../header_link/header_link.component";

const Header = () => {
  return (
    <header className="pt-2 px-2 bg-black text-white flex flex-col gap-2 items-center justify-center">
      <Link href="/" className="bg-white h-12 w-12 rounded-full"></Link>

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
