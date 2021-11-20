import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSelectedProduct = createAsyncThunk("GETSELECTEDPRODUCT", (id) => {
    return axios.get(`/api/products/${id}`).then((res) => res.data);
  });


const initialState = {};

const selectedProductReducer = createReducer(initialState, {
  [getSelectedProduct.fulfilled]: (state, action) => action.payload
});

export default selectedProductReducer;