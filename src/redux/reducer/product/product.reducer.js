import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "product",
  initialState: {
    key: 0,
    countCartItem: false,
    isCartDetail: false,
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setCountCartItem: (state, action) => {
      state.countCartItem = action.payload;
    },
    setIsCartItem: (state, action) => {
      state.isCartDetail = action.payload;
    },
  },
});

export const { setCountCartItem, setIsCartItem } = productReducer.actions;

export default productReducer.reducer;
