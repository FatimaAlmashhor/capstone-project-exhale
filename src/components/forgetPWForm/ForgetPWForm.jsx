import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fire from '../../firebase';
import { SIGNUP_ROUTE, LOGIN_ROUTE } from '../../routes';

export default function ForgetPWForm() {
  const { t } = useTranslation();
  const ReviewError = Yup.object().shape({
    email: Yup.string().email().required(t('EmailRequired')),
  });
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState('');

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ReviewError}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          fire
            .auth()
            .sendPasswordResetEmail(values.email)
            .then(() => {
              setSuccess('Check your inbox to reset your password');
            })
            .catch((err) => {
              setErrMessage(err.message);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formik) => (
        <div className="w-full max-w-xs mx-auto">
          <form
            onSubmit={formik.handleSubmit}
            className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          >
            <div className="flex justify-center py-2 mb-4 text-2xl text-blue-800 border-b-2">
              {t('Reset')}
            </div>
            <div className="text-lg text-green-500">{success}</div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              {t('Email')}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder={t('yourEmail')}
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.email && (
              <div className="text-sm font-bold text-red-500">
                {formik.errors.email}
              </div>
            )}
            <div className="flex items-center justify-between mb-6">
              <button
                className="inline-block px-4 py-2 text-white bg-blue-800 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700"
                type="submit"
              >
                {t('Reset')}
              </button>
              <Link
                className="inline-block text-sm font-normal text-blue-600 align-baseline hover:text-blue-800"
                to={LOGIN_ROUTE}
              >
                {t('Login')}
              </Link>
            </div>
            <p className="text-center text-gray-600 text-md">
              {t('haveAccount')}
              <Link to={SIGNUP_ROUTE} className="text-blue-600 text-md">
                {t('Create')}
              </Link>
            </p>
            <div className="text-lg text-red-500">{errMessage}</div>
          </form>
        </div>
      )}
    </Formik>
  );
}
