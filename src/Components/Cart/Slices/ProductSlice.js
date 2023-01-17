import { createSlice } from "@reduxjs/toolkit";

export const Status = Object.freeze({
  IDEL: "Idel",
  LOADING: "Loading",
  ERROR: "Error",
});

const ProductSlice = createSlice({
  name: "Products",

  initialState: {
    data: [],
    status: Status.IDEL,
  },

  reducers: {

    setProducts(state, action) {
      state.data = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },

  },
});
export default ProductSlice.reducer;

export const { setProducts, setStatus } = ProductSlice.actions;

//Thunk

export function fetchProducts() {

  return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const fetchdata = await fetch("https://fakestoreapi.com/products/");
      const data = await fetchdata.json();
      
      dispatch(setProducts(data));
      dispatch(setStatus(Status.IDEL));
    } catch (err){
      dispatch(setStatus(Status.ERROR));
    }
  };
}
