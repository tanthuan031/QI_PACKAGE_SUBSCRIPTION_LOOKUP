import { combineReducers } from '@reduxjs/toolkit'
import ticketReducer from './tickets/ticket.reducer'
import paymentReducer from './payment/payment.reducer'
const rootReducer = combineReducers({
  ticket: ticketReducer,
  payment: paymentReducer,
})

export default rootReducer
