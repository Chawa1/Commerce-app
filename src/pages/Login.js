import React, {useState} from 'react';

import {login} from '../app/slices/authSlice'; //aw satte ai ka la global store hamana (login a) actionakai
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
const dispatch = useDispatch();
const navigate = useNavigate();
const [form, setForm] = useState({});


function submitHandler(e){
  e.preventDefault();
//alert(JSON.stringify(form));

//make pull request to the /login API endpoint
//if success => JWT token is returned
dispatch(login(form.username));
navigate('/', { replace: true});

//if reject => error telling  you what's going on (username Doesn't Exist) 

}

function onChangeHandler(event){
  const name = event.target.name;
  const value = event.target.value;
  setForm((values) => ({...values, [name]: value}));

  console.log(form);

}

  return (
/* basic form  have: Title, Email/userName, Password, Submit Button */


    <div className='bg-indigo-600 min-h-screen p-10 flex items-center justify-center'>

      <div className='container mx-auto flex items-center justify-center'>

    <div className='bg-white p-10 rounded-lg shadow-xl w-96'>
      <form className='grid grid-cols-1 ' onSubmit={submitHandler}>
      <h2 className='text-center mb-5 text-2xl font-bold'> Login Page </h2>

      <label
      htmlFor="username"> UserName</label> {/* htmlFor="username" boi ka click man la label aka krd input aka active bet */}
      <input 
      className='bg-gray-100 rounded-md mb-3 '
       type="text" 
       name="username" 
       id="username" 
       value={form.username || ''}
       onChange={onChangeHandler}
       />
       
      <label htmlFor='password'>Password</label>
      <input 
      className='bg-gray-100 rounded-md '
      type="text" 
      name="password" 
      id="password" 
      value={form.password || ''}
    onChange={onChangeHandler}
      />
      <br/>

      <button 
      type='submit'
      className="bg-indigo-900 p-1 rounded-full  text-white px-4  hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-indigo-500">
        Login</button>

        <div className='mt-5 text-sm text-gray-500 '>
      <button className=' mt-1 underline'>Forget Password</button> {''}
      <br/>
      <button className=' mt-1 underline'>Don't have account register</button>
      </div>

      </form>
    </div>
    </div>
    
    </div>
  );
}

