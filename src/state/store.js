import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productsReducer from "./products";
import selectedProductReducer from "./selectedProduct";


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products: productsReducer,
    selectedProduct: selectedProductReducer
  },
});

export default store;
