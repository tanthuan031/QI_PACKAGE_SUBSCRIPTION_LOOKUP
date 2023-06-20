import { combineReducers } from "@reduxjs/toolkit";
import ticketReducer from "./tickets/ticket.reducer";
import paymentReducer from "./payment/payment.reducer";
import productReducer from "./product/product.reducer";
const rootReducer = combineReducers({
  ticket: ticketReducer,
  payment: paymentReducer,
  product: productReducer,
});

export default rootReducer;
