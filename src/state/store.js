import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import itemsReducer from "./items";
import selectedItemReducer from "./selectedItem";


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    items: itemsReducer,
    selectedItem: selectedItemReducer
  },
});

export default store;
