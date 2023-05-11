import MenuItem from "@/components/menu_item/menu_item.component";

export default function Dessert() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <div className="flex gap-2 items-center">
        <h1 className="h-2 w-4 bg-black"></h1>
        <h1>DESSERT</h1>
        <h1 className="h-2 w-4 bg-black"></h1>
      </div>
      <div className="mt-2 p-2 flex flex-col items-center justify-center gap-2">
        <MenuItem
          name="Product name's"
          description="sjaijsaijaoijsaoisjaoi"
          price={0.0}
          category="dessert"
        />
        <MenuItem
          name="Product name's 2"
          description="sjaijsaijaoijsaoisjaoi"
          price={15.5}
          category="dessert"
        />
        <MenuItem
          name="Product name's 3"
          description="sjaijsaijaoijsaoisjaoi"
          price={16.5}
          category="dessert"
        />
        <MenuItem
          name="Product name's 4"
          description="sjaijsaijaoijsaoisjaoi"
          price={22.0}
          category="dessert"
        />
        <MenuItem
          name="Product name's 5"
          description="sjaijsaijaoijsaoisjaoi"
          price={5.6}
          category="dessert"
        />
      </div>
    </div>
  );
}
