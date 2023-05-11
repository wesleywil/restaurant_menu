import { Product } from "@/utils/product_type/product_type";

const MenuItem = (product: Product) => {
  return (
    <div className="w-4/5 mx-auto flex gap-4 text-xl">
      <div>
        <h1>{product.name}</h1>
        <p className="w-96 h-24 text-slate-500 text-sm">
          {product.description}
        </p>
      </div>
      <h1 className="w-48 font-semibold text-red-600">$ {product.price}</h1>
    </div>
  );
};

export default MenuItem;
