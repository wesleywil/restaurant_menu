import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { fetchProducts } from "@/redux/products/products";

const FilterProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="text-base font-semibold">
      <h1 className="text-slate-400">filter products</h1>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => dispatch(fetchProducts(""))}
          className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl"
        >
          All
        </button>
        <button
          onClick={() => dispatch(fetchProducts("Starter"))}
          className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl"
        >
          Starter
        </button>
        <button
          onClick={() => dispatch(fetchProducts("Salad"))}
          className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl"
        >
          Salad
        </button>
        <button
          onClick={() => dispatch(fetchProducts("Main Dish"))}
          className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl"
        >
          Main Dishes
        </button>
        <button
          onClick={() => dispatch(fetchProducts("Beverage"))}
          className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl"
        >
          Beverages
        </button>
        <button
          onClick={() => dispatch(fetchProducts("Dessert"))}
          className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl"
        >
          Dessert
        </button>
      </div>
    </div>
  );
};

export default FilterProducts;
