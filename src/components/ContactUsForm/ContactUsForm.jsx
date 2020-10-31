import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
 export default function ContactUsForm  () {
     const {t} = useTranslation();
     const ReviewError = Yup.object().shape({
      email: Yup.string().email().required('Email is Required'),
      message: Yup.string().required('Message is Required')
       });
      return (
        <Formik initialValues={{ email: '', message: '' }} 
        validationSchema={ReviewError}>
        {(formik) =>(
         <div className="w-full max-w-xs  mx-auto">
           <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
            {t('Email')}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your Email"
              onChange={formik.handleChange}
            />
            </label>
            {  formik.errors.email &&  (
              <div className="text-red-500 text-sm font-bold">{formik.errors.email}</div>
            )}
            <br />
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
            {t('Message')}
          
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your Message"
              onChange={formik.handleChange}
            />
            </label>
            { formik.errors.message  && (
              <div className="text-red-500 text-sm font-bold">{formik.errors.message}</div>
            )}
            <button
              className="bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SEND
            </button>
           </form>
          </div>
        )}
        </Formik>
      );
  }