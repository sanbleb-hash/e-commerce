// import {
//   list,
//   productListFail,
//   productsListRequedst,
// } from ' ./';
// import axios from 'axios';

// export const fecthProducts = async (dispatch) => {
//   try {
//     dispatch(productsListRequedst());
//     const { data } = await axios.get('/api/products');
//     dispatch(list(data));
//   } catch (error) {
//     dispatch(productListFail());
//   }
// };
