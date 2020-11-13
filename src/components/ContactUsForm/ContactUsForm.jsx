import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          emailjs
            .sendForm(
              'gmail_Exhale',
              'template_g1p37uk',
              values.name,
              'user_ux4cNdoe5I82QS9ztaxr7'
            )
            .then(
              (result) => {
                // console.log(result.text);
              },
              (error) => {
                // console.log(error.text);
              }
            );
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formik) => (
        <section className="text-gray-700 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col w-full mb-12 text-center">
              <h1 className="mb-4 text-2xl font-medium text-blue-800 sm:text-3xl title-font">
                {t('GetInTouch')}
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                {t('contactus')}
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mx-auto lg:w-1/2 md:w-2/3">
                <div className="flex flex-wrap -m-2">
                  <div className="w-1/2 p-2">
                    <input
                      type="text"
                      id="user-name"
                      name="name"
                      placeholder={t('Name')}
                      onChange={formik.handleChange}
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />

                    {formik.errors.name && (
                      <div className="text-sm font-bold text-red-500">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="w-1/2 p-2">
                    <input
                      type="email"
                      id="user-email"
                      name="email"
                      placeholder={t('Email')}
                      onChange={formik.handleChange}
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />

                    {formik.errors.email && (
                      <div className="text-sm font-bold text-red-500">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="w-full p-2">
                    <textarea
                      id="message"
                      name="message"
                      placeholder={t('Message')}
                      onChange={formik.handleChange}
                      className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500"
                    />

                    {formik.errors.message && (
                      <div className="text-sm font-bold text-red-500">
                        {formik.errors.message}
                      </div>
                    )}
                  </div>
                  <div className="w-full p-2">
                    <button
                      type="submit"
                      className="inline-block w-full px-4 py-3 mt-5 text-white bg-blue-800 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700"
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
