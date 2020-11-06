import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

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
            <button
              className="bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('Login')}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
}
