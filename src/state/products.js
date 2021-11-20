import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getproducts = createAsyncThunk("GETPRODUCT", (product) => {
  return axios.get(`/api/products?limit=4&q=${product}`).then((res) => res.data);
});

const initialState = [];

const productsReducer = createReducer(initialState, {
  [getproducts.fulfilled]: (state, action) => action.payload,
});

export default productsReducer;
