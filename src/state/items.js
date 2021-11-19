import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk("GETITEM", (item) => {
  return axios.get(`/api/items?limit=4&q=${item}`).then((res) => res.data);
});

const initialState = [];

const itemsReducer = createReducer(initialState, {
  [getItems.fulfilled]: (state, action) => action.payload,
});

export default itemsReducer;
