import Link from "next/link";
import MenuButton from "../menu_button/menu_button.component";

const Header = () => {
  return (
    <header className="pt-2 px-2 bg-black text-white flex flex-col gap-2 items-center justify-center">
      <Link href="/" className="bg-white h-12 w-12 rounded-full"></Link>

      <ul className="flex gap-4">
        <MenuButton name="Starter" path="/starter" />
        <MenuButton name="Salad" path="/salad" />
        <MenuButton name="Main Dishes" path="/main_dishes" />
        <MenuButton name="Beverages" path="/beverages" />
        <MenuButton name="Dessert" path="/dessert" />
      </ul>
    </header>
  );
};

export default Header;
