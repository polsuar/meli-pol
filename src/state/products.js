import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("GETPRODUCTS", (query) => {
  return axios.get(`/api/products?q=${query}`).then((res) => res.data);
});

const initialState = [];

const productsReducer = createReducer(initialState, {
  [getProducts.fulfilled]: (state, action) => action.payload,
});

export default productsReducer;
