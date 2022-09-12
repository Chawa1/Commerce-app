import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice'; 


import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: { 
    auth: authSlice,  //boi Global store aka btwanet access auth aka bkat
    cart: cartSlice,
   // counter: counterReducer,
  }, 
});
