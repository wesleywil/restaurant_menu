type MenuTitleProps = {
  title: string;
};

const MenuTitle = ({ title }: MenuTitleProps) => {
  return (
    <div className="flex gap-2 items-center">
      <h1 className="h-2 w-4 bg-black"></h1>
      <h1>{title}</h1>
      <h1 className="h-2 w-4 bg-black"></h1>
    </div>
  );
};

export default MenuTitle;
