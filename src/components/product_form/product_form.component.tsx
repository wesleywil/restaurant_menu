const ProductForm = () => {
  return (
    <div className="p-2 absolute bg-gray-200 w-96 h-fit font-normal text-xl z-0 border border-black rounded">
      <form className="flex flex-col">
        <label>Dish's Name</label>
        <input
          type="text"
          placeholder="product's name"
          className="px-2 rounded"
        />
        <label>Description</label>
        <textarea
          cols={30}
          rows={2}
          placeholder="description/ingredients of the dish"
          className="px-2 rounded border"
        ></textarea>
        <label>Price</label>
        <input
          type="number"
          placeholder="price in dollars"
          className="px-2 rounded border"
        />
        <label>Category</label>
        <select className="px-2 rounded border">
          <option value="0" disabled>
            Select Category
          </option>
          <option value="1">Starter</option>
          <option value="2">Salad</option>
          <option value="3">Main Dishes</option>
          <option value="4">Beverages</option>
          <option value="5">Desert</option>
        </select>
        <div className="mt-2 flex gap-2 justify-center">
          <button className="px-2 bg-black hover:bg-slate-800 text-white rounded">
            Submit
          </button>
          <button
            type="button"
            className="px-2 bg-black hover:bg-slate-800 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
