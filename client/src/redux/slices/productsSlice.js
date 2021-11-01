import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: false,
  },

  reducers: {
    productsListRequest: (state) => {
      state.loading = true;
    },
    list: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productListFail: function (state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { list, productListFail, productsListRequest } =
  productsSlice.actions;

export default productsSlice.reducer;

export const fecthProducts = () => async (dispatch) => {
  try {
    dispatch(productsListRequest());
    const { data } = await axios.get('/api/products');
    dispatch(list(data));
  } catch (error) {
    dispatch(productListFail());
  }
};
