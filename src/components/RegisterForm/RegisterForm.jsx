import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export default function RegisterForm() {
  const { t } = useTranslation();
  const ReviewError = Yup.object().shape({
    name: Yup.string().required(t('NamRequired')),
    email: Yup.string().email().required(t('EmailRequired')),
    password: Yup.string().min(8, t('PassCharacters')).required(t('PassRequired')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('MuchPass'))
      .required(t('confirmPasswordRequierd')),
  });
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={ReviewError}
    >
      {(formik) => (
        <div className="w-full max-w-md mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <input
              className="  border rounded w-full py-3 px-3 text-gray-700  focus:outline-none focus:bg-white "
              id="name"
              name="name"
              type="text"
              placeholder={t('yourNam')}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <div className=" mt-3 text-red-400 text-sm">{formik.errors.name}</div>
            )}
            <input
              className=" mt-8  border rounded w-full py-3 px-3 text-gray-700 focus:outline-none "
              id="email"
              name="email"
              type="text"
              placeholder={t('yourEmail')}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <div className="mt-3 text-red-400 text-sm">{formik.errors.email}</div>
            )}
            <input
              className="mt-8  border rounded w-full py-3 px-3 text-gray-700  focus:outline-none "
              id="password"
              name="password"
              type="password"
              placeholder={t('yourPassword')}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <div className=" mt-3 text-red-400 text-sm ">
                {formik.errors.password}
              </div>
            )}
            <input
              className="mt-8  border rounded w-full py-3 px-3 text-gray-700  focus:outline-none "
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder={t('confirmYourPassword')}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword && (
              <div className=" mt-3 text-red-400 text-sm">
                {formik.errors.confirmPassword}
              </div>
            )}
            <button
              className="mt-4 w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 focus:outline-none my-1 "
              type="submit"
            >
              {t('SignUP')}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
}
