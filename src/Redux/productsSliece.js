import {  createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  filteredItms: [],
  status: null,
};
export const productsFetch = createAsyncThunk(
  "products/productFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getFilteredProducts(state) {
      return state.items[0].name
    },
    SearchProduct: (state, action) => {
      state.filteredItms = state.items.filter((cartItem) =>
          cartItem.name.toLowerCase().includes(action.payload)
      );
    }
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.state = "panding";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.state = "success";
      state.items = action.payload;
      state.filteredItms = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.state = "rejected";
    },
  },
});
export const {
  getFilteredProducts,
  SearchProduct
} = productsSlice.actions;
export default productsSlice.reducer;
