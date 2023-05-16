import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

export interface ProductState {
  products: Product[];
  product: Product;
  status: string;
  error: string;
}

const initialState: ProductState = {
  products: [],
  product: {} as Product,
  status: "idle",
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category: string) => {
    const url = "http://localhost:3000/api/products";
    if (category === "") {
      const res = await axios.get(url);
      return res.data;
    } else {
      const res = await axios.get(url + `?category=${category}`);
      return res.data;
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data: Product) => {
    const res = await axios.post("http://localhost:3000/api/products", data);
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (formData: any) => {
    const { data, id } = formData;
    const res = await axios.put(
      `http://localhost:3000/api/products?id=${id}`,
      data
    );
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    const res = await axios.delete(
      `http://localhost:3000/api/products?id=${id}`
    );
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProductById: (state, action: PayloadAction<number>) => {
      const foundProduct = state.products.find(
        (item) => item.id === action.payload
      );
      state.product =
        foundProduct !== undefined ? foundProduct : ({} as Product);
    },
    resetProduct: (state) => {
      state.product = {} as Product;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "error";
      })
      .addCase(createProduct.pending, (state) => {
        state.status = "creating";
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.status = "created";
      })
      .addCase(createProduct.rejected, (state) => {
        state.error = "error while creating";
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "updating";
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.status = "updated";
      })
      .addCase(updateProduct.rejected, (state) => {
        state.error = "error while updating";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "deleting";
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.status = "deleted";
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.error = "error while deleting";
      });
  },
});
export const { selectProductById, resetProduct } = productSlice.actions;

export default productSlice.reducer;
