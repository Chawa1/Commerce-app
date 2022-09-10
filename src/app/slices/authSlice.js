import { createSlice } from '@reduxjs/toolkit';

const initialState = {
isAuthenticated: false, /* falce wata agar authentication ii nabo allet login bka */
role: '',
username: '',
};

//state.auth.role

const authSlice = createSlice({
  name: 'auth', /* ama abet String bet */
  initialState,
  reducers: {
login: (state, action)=> {  /* katek login ii krd authentikation ii bate save ii kat dataka */
state.isAuthenticated = true;
state.username = action.payload;
state.role = 'admin';
console.log('login action ');
localStorage.setItem('username', action.payload); // la localStorage da data ka save abet
//localStorage.getItem('username');
},

logout: (state) =>{  /* agar logout bw localStorage aka sfr betawa */

  state.isAuthenticated = false; // boi login bkatawa
  state.role = ''; //clear role 
  state.username =''; // clear username
  console.log('logout action ');
  localStorage.removeItem('username');

},
  },
});

export const { login, logout } = authSlice.actions; 

export default authSlice.reducer;