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
            className="bg-white  rounded  pt-6 pb-3 mb-4"
          >
            <input
              className=" appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder={t('yourEmail')}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <div className="text-red-500 text-sm font-bold">
                {formik.errors.email}
              </div>
            )}

            <input
              className=" mt-5 appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder={t('yourPassword')}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <div className="text-red-500 text-sm font-bold">
                {formik.errors.password}
              </div>
            )}
            <div className="flex items-center justify-between mb-6">
              <button
                className="mt-5 px-4 py-3 w-full rounded text-white inline-block shadow-lg bg-blue-800 hover:bg-blue-600 focus:bg-blue-700"
                type="submit"
              >
                {t('Login')}
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}
