import MenuItem from "@/components/menu_item/menu_item.component";
import MenuTitle from "@/components/menu_title/menu_title.component";
import { Product } from "@/utils/product_type/product_type";

async function getStarter() {
  const res = await fetch("http://localhost:3000/api/getStarter");
  if (!res.ok) {
    console.log("Error:", res);
  }
  return res.json();
}

export default async function Starter() {
  const data = await getStarter();
  return (
    <div className="mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <MenuTitle title="STARTER" />
      <div className="mt-2 p-2 flex flex-col items-center justify-center gap-2">
        {data.map((item: Product) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
