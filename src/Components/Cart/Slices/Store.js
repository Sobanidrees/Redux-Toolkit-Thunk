import cartReducer from './CartSlice';
import { configureStore } from '@reduxjs/toolkit'
import PReducer from './ProductSlice';
const store=configureStore({
reducer:{
  Cart:cartReducer,
  Product:PReducer,
}
})
export default store;