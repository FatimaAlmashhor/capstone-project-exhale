import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export default function ContactUsForm() {
  const { t } = useTranslation();
  const ReviewError = Yup.object().shape({
    email: Yup.string().email().required(t('EmailRequired')),
    message: Yup.string().required(t('MassageRequierd')),
  });
  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      validationSchema={ReviewError}
    >
      {(formik) => (
        <div className="w-full max-w-xs  mx-auto">
          <h5 className="text-3xl sm:text-3xl text-center text-gray-700 dark:text-white font-extrabold tracking-tight">
            Get in touch
          </h5>

          <p className="text-normal text-lg sm:text-2xl  text-center font-medium text-gray-600 dark:text-gray-400 mt-2">
            Write in the form to comunicate with us
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="p-6 flex flex-col justify-center"
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="hidden">
                {t('Email')}
              </label>
              <input
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                id="email"
                name="email"
                type="text"
                placeholder={t('yourEmail')}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.email && (
              <div className="text-red-500 text-sm font-bold">
                {formik.errors.email}
              </div>
            )}

            <label htmlFor="message" className="hidden">
              {t('Message')}
            </label>

            <textarea
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              id="message"
              name="message"
              rows="5"
              placeholder={t('YourMessage')}
              onChange={formik.handleChange}
            />
            {formik.errors.message && (
              <div className="text-red-500 text-sm font-bold">
                {formik.errors.message}
              </div>
            )}
            <button
              className="bg-blue-700 mt-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('Send')}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
}
