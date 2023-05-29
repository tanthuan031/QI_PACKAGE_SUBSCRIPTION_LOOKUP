import { createSlice } from '@reduxjs/toolkit'

export const paymentReducer = createSlice({
  name: 'payment',
  initialState: {
    key: 0,
    isCreatePaymentStatement: false,
    isCreatePaymentReceipt: false,
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload
    },
    setIsCreatePaymentStatement: (state, action) => {
      state.isCreatePaymentStatement = action.payload
    },
    setIsCreatePaymentReceipt: (state, action) => {
      state.isCreatePaymentReceipt = action.payload
    },
  },
})

export const { setIsCreatePaymentStatement, setIsCreatePaymentReceipt } = paymentReducer.actions

export default paymentReducer.reducer
