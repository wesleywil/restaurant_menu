import MenuItem from "@/components/menu_item/menu_item.component";
import MenuTitle from "@/components/menu_title/menu_title.component";

export default function Salad() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <MenuTitle title="SALAD" />
      <div className="mt-2 p-2 flex flex-col items-center justify-center gap-2">
        <MenuItem
          name="Product name's"
          description="sjaijsaijaoijsaoisjaoi"
          price={0.0}
          category="salad"
        />
        <MenuItem
          name="Product name's 2"
          description="sjaijsaijaoijsaoisjaoi"
          price={15.5}
          category="salad"
        />
        <MenuItem
          name="Product name's 3"
          description="sjaijsaijaoijsaoisjaoi"
          price={16.5}
          category="salad"
        />
        <MenuItem
          name="Product name's 4"
          description="sjaijsaijaoijsaoisjaoi"
          price={22.0}
          category="salad"
        />
        <MenuItem
          name="Product name's 5"
          description="sjaijsaijaoijsaoisjaoi"
          price={5.6}
          category="salad"
        />
      </div>
    </div>
  );
}
