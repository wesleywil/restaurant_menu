import MenuItem from "@/components/menu_item/menu_item.component";
import MenuTitle from "@/components/menu_title/menu_title.component";
import { Product } from "@/utils/product_type/product_type";
import { getProducts } from "@/utils/products/products";

export default async function Dessert() {
  const data = await getProducts("Dessert");
  return (
    <div className="mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <MenuTitle title="DESSERT" />
      <div className="mt-2 p-2 flex flex-col items-center justify-center gap-2">
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
