"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { FaTimes } from "react-icons/fa";
import { set_form_hidden } from "@/redux/utils/utils";
import {
  createProduct,
  updateProduct,
  resetProduct,
} from "@/redux/products/products";
import { Product } from "@/utils/product_type/product_type";

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  description: HTMLInputElement;
  price: HTMLInputElement;
  category: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const ProductForm = () => {
  const product = useSelector((state: RootState) => state.products.product);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;
    const data: Product = {
      name: target.name.value,
      description: target.description.value,
      price: target.price.value,
      category: target.category.value,
    };
    console.log("PRODUCT DATA=> ", product);
    if (Object.keys(product).length === 0) {
      dispatch(createProduct(data));
      dispatch(set_form_hidden());
    } else {
      dispatch(updateProduct({ data, id: product.id }));
      dispatch(set_form_hidden());
    }
  };
  return (
    <div className="p-2 absolute bg-[#1b1c1f] w-screen h-screen flex flex-col items-center justify-center font-normal text-xl z-10">
      <button
        onClick={() => {
          dispatch(set_form_hidden());
          dispatch(resetProduct());
        }}
        className="h-24 w-24 pt-4 bg-[#4aba2e] hover:bg-[#4aba2e]/80 flex justify-center text-white text-6xl rounded-full"
      >
        <FaTimes />
      </button>
      <form onSubmit={handleSubmit} className="self-center mt-8 flex flex-col ">
        <label className="text-[#4aba2e]">Dish's Name</label>
        <input
          type="text"
          name="name"
          defaultValue={product ? product.name : ""}
          placeholder="product's name"
          className="px-2 rounded"
        />
        <label className="text-[#4aba2e]">Description</label>
        <textarea
          name="description"
          defaultValue={product ? product.description : ""}
          cols={30}
          rows={2}
          placeholder="description/ingredients of the dish"
          className="px-2 rounded border"
        ></textarea>
        <label className="text-[#4aba2e]">Price</label>
        <input
          type="number"
          name="price"
          step="0.01"
          min="0"
          max="100"
          defaultValue={product ? product.price : ""}
          placeholder="price in dollars"
          className="px-2 rounded border"
        />
        <label className="text-[#4aba2e]">Category</label>
        <select
          name="category"
          defaultValue={product ? product.category : "0"}
          className="px-2 rounded border"
        >
          <option value="0" disabled>
            Select Category
          </option>
          <option value="Starter">Starter</option>
          <option value="Salad">Salad</option>
          <option value="Main Dish">Main Dishes</option>
          <option value="Beverage">Beverages</option>
          <option value="Dessert">Dessert</option>
        </select>
        <div className="mt-2 flex gap-4 justify-center">
          <button className="px-2 bg-[#4aba2e] hover:bg-[#e1d498] text-white hover:text-[#1b1c1f] rounded">
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(set_form_hidden());
              dispatch(resetProduct());
            }}
            className="px-2 bg-[#4aba2e] hover:bg-[#e1d498] text-white hover:text-[#1b1c1f] rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
