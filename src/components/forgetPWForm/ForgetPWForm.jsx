import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import fire from '../../firebase';

export default function ForgetPWForm() {
  const { t } = useTranslation();
  const ReviewError = Yup.object().shape({
    email: Yup.string().email().required(t('EmailRequired')),
  });
  const [errMessage, setErrMessage] = useState('');
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ReviewError}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          fire
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
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
            className="pt-6 pb-3 mb-4 bg-white rounded"
          >
            <input
              className="w-full p-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
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

            <div className="flex items-center justify-between mb-6">
              <button
                className="inline-block w-full px-4 py-3 mt-5 text-white bg-blue-800 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700"
                type="submit"
              >
                {t('Reset')}
              </button>
            </div>
            <div className="text-lg text-red-500">{errMessage}</div>
          </form>
        </div>
      )}
    </Formik>
  );
}
