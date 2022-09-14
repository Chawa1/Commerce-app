import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
//import * as Yup from 'yup';

export default function SignupForms() {
    const formik = useFormik({
        initialValues: {
          email: '',
          username: '',
        },

        validationSchema: Yup.object({ //just copy the code after installed and imported yup
            username: Yup.string()
              .max(15, 'Must be 15 characters or less')
      
              .required('Username is Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Email is Required'),
          }), 

        onSubmit: values => { //after getting data

            //make a post request
           /*  axios
            .post('testurl.com/signup', values)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              }); */


          alert(JSON.stringify(values, null, 2));
        },
      });


  return (
    <form onSubmit={formik.handleSubmit}>
   
   <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        required
        {...formik.getFieldProps('username')}
      />
      {formik.errors.username ? (
        <p className="text-red-500"> {formik.errors.username}</p>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="text-red-500"> {formik.errors.email}</p>
      ) : null}

      <button
        type="submit"
        className="bg-indigo-500 text-white rounded-sm shadow-sm p-2 "
      >
        Submit
      </button>

  </form>

  );
}
