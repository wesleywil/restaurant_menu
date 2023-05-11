import MenuTitle from "@/components/menu_title/menu_title.component";
import ProductItem from "@/components/product_item/product_item.component";

export default function Admin() {
  return (
    <div className="w-full mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <MenuTitle title="ADMIN" />
      <div></div>
      <div className="w-11/12 flex gap-2 justify-between mt-2 pl-2 text-base">
        <button className="px-2 bg-blue-400 text-white rounded-xl">
          New Product
        </button>
      </div>
      <div className="w-11/12 mt-1 p-2 flex flex-col gap-2 text-2xl font-normal border rounded-xl">
        <ProductItem name="Product 1" price={0.0} category="Salad" />
        <ProductItem name="Product 2" price={0.0} category="Salad" />
        <ProductItem name="Product 3" price={0.0} category="Starter" />
        <ProductItem name="Product 4" price={0.0} category="Main Dish" />
        <ProductItem name="Product 5" price={0.0} category="Dessert" />
      </div>
    </div>
  );
}
