import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },

  reducers: {
    cartAddItem: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { cartAddItem } = cartSlice.actions;
export default cartSlice.reducer;

export const fecthCartitems = () => () => {};
