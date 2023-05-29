import { createSlice } from '@reduxjs/toolkit'

export const ticketReducer = createSlice({
  name: 'ticket',
  initialState: {
    key: 0,
    isCreateRequest: false,
    isRequest: false,
    isFollow: false,
    ticket: {},
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload
    },
    setIsCreateRequest: (state, action) => {
      state.isCreateRequest = action.payload
    },
    setIsDetailRequest: (state, action) => {
      state.isRequest = action.payload
    },
    setIsFollow: (state, action) => {
      state.isFollow = action.payload
    },
  },
})

export const { setIsCreateRequest, setIsFollow, setIsDetailRequest } = ticketReducer.actions

export default ticketReducer.reducer
