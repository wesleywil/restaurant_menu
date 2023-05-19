import MenuItem from "@/components/menu_item/menu_item.component";
import MenuTitle from "@/components/menu_title/menu_title.component";
import { Product } from "@/utils/product_type/product_type";
import { getProducts } from "@/utils/products/products";

export default async function Starter() {
  const data = await getProducts("Starter");
  return (
    <div className="mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <MenuTitle title="STARTER" />
      <div className="h-[20rem] md:h-[38rem] mt-2 p-2 pt-4 overflow-y-auto">
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
