import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { selectProductById } from "@/redux/products/products";
import { set_form_hidden, set_delete_hidden } from "@/redux/utils/utils";

import { Product } from "@/utils/product_type/product_type";

type PartialProduct = Partial<Product>;

const ProductItem = ({ id, name, price, category }: PartialProduct) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdate = () => {
    dispatch(selectProductById(id!));
    dispatch(set_form_hidden());
  };
  const handleDelete = () => {
    dispatch(selectProductById(id!));
    dispatch(set_delete_hidden());
  };
  return (
    <div className="w-4/5 mx-auto p-2 flex gap-2 justify-between bg-slate-200 rounded">
      <div className="flex flex-col">
        <h1 className="text-xs text-slate-400">{category}</h1>
        <h2>{name}</h2>
      </div>

      <h1 className="self-center">${price}</h1>
      <div className="flex gap-2 justify-center text-xl">
        <button
          onClick={handleUpdate}
          className="self-center hover:text-green-600 transform duration-500 ease-in"
        >
          Edit
        </button>
        <span className="self-center">/</span>
        <button
          onClick={handleDelete}
          className="self-center hover:text-red-500 transform duration-500 ease-in"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
