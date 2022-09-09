import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice'; 


import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: { 
    auth: authSlice,  //boi Global store aka btwanet access auth aka bkat
   // counter: counterReducer,
  }, 
});
