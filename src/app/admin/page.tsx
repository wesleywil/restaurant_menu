"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { set_form_hidden } from "@/redux/utils/utils";
import { resetProduct, fetchProducts } from "@/redux/products/products";

import FilterProducts from "@/components/filter_products/filter_products.component";
import MenuTitle from "@/components/menu_title/menu_title.component";
import ProductForm from "@/components/product_form/product_form.component";
import ProductItem from "@/components/product_item/product_item.component";
import DeleteProduct from "@/components/delete_product/delete_product.component";

export default function Admin() {
  const formHidden = useSelector((state: RootState) => state.utils.form_hidden);
  const deleteHidden = useSelector(
    (state: RootState) => state.utils.delete_hidden
  );
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (
      status === "idle" ||
      status === "created" ||
      status === "updated" ||
      status === "deleted"
    ) {
      dispatch(fetchProducts(""));
    }
  }, [status]);

  return (
    <div className="w-full mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      {formHidden ? "" : <ProductForm />}

      <MenuTitle title="ADMIN" />
      <FilterProducts />

      <div className="w-11/12 flex flex-col gap-2 justify-between mt-2 pl-2 text-base">
        <button
          onClick={() => {
            dispatch(set_form_hidden());
            dispatch(resetProduct());
          }}
          className="w-32	bg-[#e1d498] hover:bg-[#4aba2e] text-[#1b1c1f] rounded-xl"
        >
          New Product
        </button>

        {deleteHidden ? "" : <DeleteProduct />}
      </div>
      <div className="w-11/12 h-[38rem] mt-1 p-2 flex flex-col gap-2 text-2xl font-normal border border-[#4aba2e] rounded-xl overflow-y-auto">
        {products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
