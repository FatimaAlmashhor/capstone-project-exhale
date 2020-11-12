import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import fire from '../../firebase';

export default function ResetPassword() {
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
              setErrMessage('');
              setSuccess('Check your inbox to reset your password');
            })
            .catch((err) => {
              setSuccess('');
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
            className="pt-6 pb-3 mb-4 bg-white rounded"
          >
            <div className="mb-2 text-lg text-green-500">{success}</div>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder={t('yourEmail')}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <div className="text-sm font-bold text-red-500">
                {formik.errors.email}
              </div>
            )}
            <div className="mb-2">
              <button
                className="w-full px-4 py-2 mt-5 text-white bg-blue-800 rounded shadow-lg focus:outline-none over:bg-blue-600 focus:bg-blue-700"
                type="submit"
              >
                {t('Reset')}
              </button>
            </div>
            <div className="mt-2 text-red-500 mtext-lg">{errMessage}</div>
          </form>
        </div>
      )}
    </Formik>
  );
}
