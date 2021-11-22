import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk("GETSINGLEPRODUCT", (id) => {
    return axios.get(`/api/products/${id}`).then((res) => res.data);
  });


const initialState = {};

const singleProductReducer = createReducer(initialState, {
  [getSingleProduct.fulfilled]: (state, action) => action.payload
});

export default singleProductReducer;