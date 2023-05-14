"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { set_form_hidden } from "@/redux/utils/utils";

import FilterProducts from "@/components/filter_products/filter_products.component";
import MenuTitle from "@/components/menu_title/menu_title.component";
import ProductForm from "@/components/product_form/product_form.component";
import ProductItem from "@/components/product_item/product_item.component";

export default function Admin() {
  const formHidden = useSelector((state: RootState) => state.utils.form_hidden);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-full mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      {formHidden ? "" : <ProductForm />}

      <MenuTitle title="ADMIN" />
      <FilterProducts />
      <div className="w-11/12 flex flex-col gap-2 justify-between mt-2 pl-2 text-base">
        <button
          onClick={() => dispatch(set_form_hidden())}
          className="w-32	 bg-blue-400 text-white rounded-xl"
        >
          New Product
        </button>
        <div className=" flex">
          <input
            type="text"
            placeholder="Search Products"
            className="w-1/2 px-2 border outline-none rounded-l"
          />
          <button className="px-2 bg-purple-400 hover:bg-purple-600 text-white rounded-r">
            Search
          </button>
        </div>
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
