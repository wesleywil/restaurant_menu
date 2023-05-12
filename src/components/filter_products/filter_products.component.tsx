const FilterProducts = () => {
  return (
    <div className="text-base font-semibold">
      <h1 className="text-slate-400">filter products</h1>
      <div className="flex gap-2 justify-center">
        <button className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl">
          All
        </button>
        <button className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl">
          Starter
        </button>
        <button className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl">
          Salad
        </button>
        <button className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl">
          Main Dishes
        </button>
        <button className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl">
          Beverages
        </button>
        <button className="px-2 bg-green-500 hover:bg-green-600 text-white rounded-xl">
          Dessert
        </button>
      </div>
    </div>
  );
};

export default FilterProducts;
