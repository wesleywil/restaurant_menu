import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
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
    <div className="w-4/5 mx-auto p-2 flex gap-2 justify-between text-[#1b1c1f] bg-[#e1d498] rounded">
      <div className="w-1/2 grow flex flex-col">
        <h1 className="text-xs ">{category}</h1>
        <h2 className="font-semibold ">{name}</h2>
      </div>

      <h1 className="w-1/3 grow text-left self-center text-3xl font-bold">
        ${price}
      </h1>
      <div className="grow flex gap-4 justify-end text-2xl">
        <button
          onClick={handleUpdate}
          className="self-center hover:text-[#4aba2e] transform duration-500 ease-in"
        >
          <FaEdit />
        </button>

        <button
          onClick={handleDelete}
          className="self-center hover:text-red-500 transform duration-500 ease-in"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
