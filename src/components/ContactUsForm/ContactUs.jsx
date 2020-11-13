import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();
  const [success, setSuccess] = useState('');
  const [errMessage, setErrMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail_Exhale',
        'template_g1p37uk',
        e.target,
        'user_ux4cNdoe5I82QS9ztaxr7'
      )
      .then(
        () => {
          setErrMessage('');
          setSuccess('You message have been successfully sent.');
        },
        (error) => {
          setSuccess('');
          setErrMessage(error.message);
        }
      );
  }

  return (
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
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <input type="hidden" name="contact_number" />
                <input
                  type="text"
                  name="user_name"
                  placeholder={t('Name')}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                />
              </div>
              <div className="w-1/2 p-2">
                <input
                  type="email"
                  name="user_email"
                  placeholder={t('Email')}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                />
              </div>
              <div className="w-full p-2">
                <textarea
                  name="message"
                  placeholder={t('Message')}
                  className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500"
                />
              </div>
              <div className="w-full p-2">
                <input
                  type="submit"
                  value={t('Send')}
                  className="inline-block w-full px-4 py-3 mt-5 text-white bg-blue-800 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="text-lg text-red-500">
          {success}
          {errMessage}
        </div>
      </div>
    </section>
  );
}
