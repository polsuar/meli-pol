import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productsReducer from "./products";
import singleProductReducer from "./singleProduct";


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer
  },
});

export default store;
