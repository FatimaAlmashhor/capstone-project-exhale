import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
export default function RegisterForm() {
        const {t} = useTranslation();
        const ReviewError=Yup.object().shape({
         name: Yup.string().required('Name is Required '),
         email: Yup.string().email().required('Email is Required'),
         password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is Required'),
         confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is Required')
         });
      return (   
        <Formik initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={ReviewError}>
          {(formik) =>(
        <div className="w-full max-w-xs mx-auto">
          <form onSubmit={formik.handleSubmit} className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4">
            <label htmlFor="name"className="block text-gray-700 text-sm font-bold mb-2">
               {t('Name')}
               <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your Name"
                onChange={formik.handleChange}
               />
            </label>
              {formik.errors.name && (<div className="text-red-500 text-sm font-bold">
                {formik.errors.name}</div> )}
              <label
               htmlFor="email"
               className="block text-gray-700 text-sm font-bold mb-2">
               {t('Email')}
               <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                />
              </label>
                {formik.errors.email &&
                 (<div className="text-red-500 text-sm font-bold">{formik.errors.email}</div>
                )}
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2">
                {t('Password')}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
               />
              </label>
              {formik.errors.password && 
                ( <div className="text-red-500 text-sm font-bold">{formik.errors.password}</div>
              )}
             <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2">
                {t('confirmPassword')}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                onChange={formik.handleChange}
              />
             </label>
              {formik.errors.confirmPassword && 
                ( <div className="text-red-500 text-sm font-bold">{formik.errors.confirmPassword} </div>
               )}
              <button
                className="bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Sign UP
              </button>
          </form>
        </div>
        )}
      </Formik>
      );
  }
