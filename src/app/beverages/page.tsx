import MenuItem from "@/components/menu_item/menu_item.component";
import MenuTitle from "@/components/menu_title/menu_title.component";
import { Product } from "@/utils/product_type/product_type";
import { getProducts } from "@/utils/products/products";

export default async function Beverages() {
  const data = await getProducts("Beverage");
  return (
    <div className="mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <MenuTitle title="BEVERAGES" />
      <div className="h-[20rem] md:h-[38rem] mt-2 p-2 pt-4 overflow-y-auto">
        {data.length ? (
          data.map((item: Product) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              category={item.category}
            />
          ))
        ) : (
          <h1 className="mt-8 text-xl text-slate-400 ">NO BEVERAGES</h1>
        )}
      </div>
    </div>
  );
}
