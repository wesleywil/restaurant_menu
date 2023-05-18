import { Domine } from "next/font/google";

type MenuTitleProps = {
  title: string;
};

const domine = Domine({ weight: "500", subsets: ["latin"] });

const MenuTitle = ({ title }: MenuTitleProps) => {
  return (
    <div
      className={`flex gap-2 items-center text-[#e1d498] ${domine.className}`}
    >
      <h1 className="h-1 w-4 bg-[#e1d498]"></h1>
      <h1>{title}</h1>
      <h1 className="h-1 w-4 bg-[#e1d498]"></h1>
    </div>
  );
};

export default MenuTitle;
