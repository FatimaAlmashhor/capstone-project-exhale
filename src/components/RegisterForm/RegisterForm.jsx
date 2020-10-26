import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => (
  <Formik
    initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Name is Required '),
      email: Yup.string().email().required('Email is Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is Required'),
    })}
  >
    {(props) => {
      const { errors, handleChange, handleSubmit } = props;
      return (
        <div className="w-full max-w-xs m-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4"
          >
            <label 
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your Name"
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-red-500 text-sm font-bold">{errors.name}</div>
            )}
            <br />
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500 text-sm font-bold">{errors.email}</div>
            )}
            <br />
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            {errors.password && (
              <div className="text-red-500 text-sm font-bold">
                {' '}
                {errors.password}
              </div>
            )}
            <br />

            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm font-bold">
                {' '}
                {errors.confirmPassword}
              </div>
            )}
            <br />
            <button
              className="bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign UP
            </button>
          </form>
        </div>
      );
    }}
  </Formik>
);

export default RegisterForm;