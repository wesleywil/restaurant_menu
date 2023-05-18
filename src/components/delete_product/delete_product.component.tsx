import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { deleteProduct, resetProduct } from "@/redux/products/products";
import { set_delete_hidden } from "@/redux/utils/utils";

const DeleteProduct = () => {
  const product = useSelector((state: RootState) => state.products.product);
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = () => {
    dispatch(deleteProduct(product.id!));
    dispatch(set_delete_hidden());
  };
  const handleCancel = () => {
    dispatch(resetProduct());
    dispatch(set_delete_hidden());
  };
  return (
    <div className="rounded flex flex-col gap-2 items-center justify-center text-white">
      <h1>
        Are you sure you want to delete the{" "}
        <span className="text-[#4aba2e]">{product.name} ?</span>
      </h1>
      <div className="text-2xl">
        <button onClick={handleDelete} className="hover:text-slate-400">
          Yes
        </button>{" "}
        /{" "}
        <button onClick={handleCancel} className="hover:text-slate-400">
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
