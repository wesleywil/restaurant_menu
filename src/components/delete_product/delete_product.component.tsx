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
    <div className="border rounded flex flex-col gap-2 items-center justify-center">
      <h1 className="text-black">
        Are you sure you want to delete the{" "}
        <span className="text-red-500">{product.name}</span>?
      </h1>
      <div>
        <button onClick={handleDelete}>Yes</button> /{" "}
        <button onClick={handleCancel}>No</button>
      </div>
    </div>
  );
};

export default DeleteProduct;
