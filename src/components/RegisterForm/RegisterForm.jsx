/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import fire from '../../firebase';
import Login from '../../containers/Login';

export default function RegisterForm() {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
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
        <div className="w-full max-w-md mx-auto">
          <form
            onSubmit={formik.handleSubmit}
            className=" pt-6 pb-8 mb-4 bg-white rounded w-full"
          >
            <input
              className="w-full p-3 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none "
              id="name"
              name="name"
              type="text"
              placeholder={t('yourNam')}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <div className="text-sm  mt-2 text-red-400">{formik.errors.name}</div>
            )}
            <input
              className="mt-4 w-full p-3 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none "
              id="email"
              name="email"
              type="text"
              placeholder={t('yourEmail')}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <div className="text-sm  mt-2 text-red-400">{formik.errors.email}</div>
            )}
            <input
              className="mt-4 w-full p-3 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none"
              id="password"
              name="password"
              type="password"
              placeholder={t('yourPassword')}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <div className="text-sm  mt-2 text-red-400">
                {formik.errors.password}
              </div>
            )}
            <input
              className="mt-4 w-full p-3 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder={t('confirmYourPassword')}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword && (
              <div className="text-sm  mt-2 text-red-400">
                {formik.errors.confirmPassword}
              </div>
            )}
            <div>
              <p className="mt-5 text-gray-500 text-sm">
                {t('haveAccount')}
                <span> ?</span>
                <span
                  onClick={() => setShowLogin(true)}
                  className=" cursor-pointer text-blue-500"
                >
                  {t('Login')}
                </span>
              </p>
            </div>
            <button
              className="w-full px-4 py-3 mt-4 font-bold text-white bg-blue-800 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('SignUP')}
            </button>
            {showLogin && (
              <Login show={showLogin} onClick={() => setShowLogin(false)} />
            )}
            <div className="text-lg text-red-500">{errMessage}</div>
          </form>
        </div>
      )}
    </Formik>
  );
}
