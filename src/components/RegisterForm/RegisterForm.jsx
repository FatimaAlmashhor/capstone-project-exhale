import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import fire from '../../firebase';

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
  const [errMessage, setErrMessage] = useState('');
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={ReviewError}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          fire
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
              fire.database().ref('name').orderByKey().limitToLast(100);
              fire.database().ref('name').push(values.name);
              fire.database().ref('email').orderByKey().limitToLast(100);
              fire.database().ref('email').push(values.email);
              fire.database().ref('password').orderByKey().limitToLast(100);
              fire.database().ref('password').push(values.password);
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
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              {t('Name')}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder={t('yourNam')}
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.name && (
              <div className="text-sm font-bold text-red-500">
                {formik.errors.name}
              </div>
            )}
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
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              {t('Password')}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder={t('yourPassword')}
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.password && (
              <div className="text-sm font-bold text-red-500">
                {formik.errors.password}
              </div>
            )}
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              {t('confirmPassword')}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder={t('confirmYourPassword')}
                onChange={formik.handleChange}
              />
            </label>
            {formik.errors.confirmPassword && (
              <div className="text-sm font-bold text-red-500">
                {formik.errors.confirmPassword}
              </div>
            )}
            <button
              className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('SignUP')}
            </button>
            <div className="text-lg text-red-500">{errMessage}</div>
          </form>
        </div>
      )}
    </Formik>
  );
}
