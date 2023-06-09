import { configureStore } from "@reduxjs/toolkit/";
import productReducer from "./products/products";
import  utilsReducer from "./utils/utils";


export const store = configureStore({
    reducer:{
        utils:utilsReducer,
        products:productReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;