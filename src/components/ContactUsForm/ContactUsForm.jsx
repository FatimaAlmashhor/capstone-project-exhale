import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export default function ContactUsForm() {
  const { t } = useTranslation();
  const ReviewError = Yup.object().shape({
    name: Yup.string().required(t('NamRequired')),
    email: Yup.string().email().required(t('EmailRequired')),
    message: Yup.string().required(t('MassageRequierd')),
  });
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ReviewError}
    >
      {(formik) => (
        <section className="text-gray-700 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                GET IN TOUCH
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {t('contactus')}
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t('Name')}
                      onChange={formik.handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    {formik.errors.name && (
                      <div className="text-red-500 text-sm font-bold">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="p-2 w-1/2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t('Email')}
                      onChange={formik.handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    {formik.errors.email && (
                      <div className="text-red-500 text-sm font-bold">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="p-2 w-full">
                    <textarea
                      id="message"
                      name="message"
                      placeholder={t('Message')}
                      onChange={formik.handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />

                    {formik.errors.message && (
                      <div className="text-red-500 text-sm font-bold">
                        {formik.errors.message}
                      </div>
                    )}
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="mt-5 px-4 py-3 w-full rounded text-white inline-block shadow-lg bg-blue-800 hover:bg-blue-600 focus:bg-blue-700"
                    >
                      {t('Send')}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </Formik>
  );
}
