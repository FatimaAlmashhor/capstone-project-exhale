import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SIGNUP_ROUTE } from '../../routes';

export default function LoginForm() {
  const { t } = useTranslation();
  const ReviewError = Yup.object().shape({
    email: Yup.string().email().required(t('EmailRequired')),
    password: Yup.string().required(t('PassRequired')),
  });
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ReviewError}
    >
      {(formik) => (
        <div className="w-full max-w-xs mx-auto">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="text-blue-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
              Login
            </div>
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
                placeholder={t('yourEmail')}
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.email && (
              <div className="text-red-500 text-sm font-bold">
                {formik.errors.email}
              </div>
            )}
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {t('Password')}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder={t('yourPassword')}
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.password && (
              <div className="text-red-500 text-sm font-bold">
                {formik.errors.password}
              </div>
            )}
            <div className="flex items-center justify-between mb-6">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-800 hover:bg-blue-600 focus:bg-blue-700"
                type="submit"
              >
                {t('Login')}
              </button>
              <NavLink
                className="inline-block align-baseline font-normal text-sm text-blue-600 hover:text-blue-800"
                to={SIGNUP_ROUTE}
              >
                {t('forgetpassword')}
              </NavLink>
            </div>
            <p className=" text-center text-md  text-gray-600 ">
              {t('haveAccount')}
              <NavLink to={SIGNUP_ROUTE} className="text-md text-blue-600">
                {t('Create')}
              </NavLink>
            </p>
          </form>
        </div>
      )}
    </Formik>
  );
}
