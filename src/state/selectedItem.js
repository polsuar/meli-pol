import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSelectedItem = createAsyncThunk("GETSELECTEDITEM", (id) => {
    return axios.get(`/api/items/${id}`).then((res) => res.data);
  });


const initialState = {};

const selectedItemReducer = createReducer(initialState, {
  [getSelectedItem.fulfilled]: (state, action) => action.payload
});

export default selectedItemReducer;