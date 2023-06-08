import { createSlice } from "@reduxjs/toolkit";

export const paymentReducer = createSlice({
  name: "payment",
  initialState: {
    key: 0,
    isCreatePayment: false,
    isCreatePaymentReceipt: false,
    dataPackagePayment: undefined,
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setIsCreatePayment: (state, action) => {
      state.isCreatePayment = action.payload;
    },
    setDataPayment: (state, action) => {
      state.dataPackagePayment = action.payload;
    },
  },
});

export const { setIsCreatePayment, setDataPayment } = paymentReducer.actions;

export default paymentReducer.reducer;
