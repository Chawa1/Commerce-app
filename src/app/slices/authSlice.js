import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isAuthenticated: false, /* falce wata agar authentication ii nabo allet login bka */
role: '',
username: 'john',
};

//state.auth.role

const authSlice = createSlice({
  name: 'auth', /* ama abet String bet */
  initialState,
  reducers: {
login: (state, action)=> {  /* katek login ii krd authentikation ii bate save ii kat dataka */
state.isAuthenticated = true;
state.username = action.payload;
console.log('our login action is run ');
}


  },
});

export const { login } = authSlice.actions

export default authSlice.reducer