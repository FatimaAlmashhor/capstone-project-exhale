import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import received from '../../Lottie/message-received.json';
import Modal, { Body } from '../common/Modal';

export default function ContactUsForm() {
  const { t } = useTranslation();
  const ReviewError = Yup.object().shape({
    name: Yup.string().required(t('NamRequired')),
    email: Yup.string().email().required(t('EmailRequired')),
    message: Yup.string().required(t('MassageRequierd')),
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: received,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [show, setShow] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleTarget = (e) => {
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
          setShow(true);
          setErrMsg('');
        },
        (error) => {
          setErrMsg(error.text);
        }
      );
  };
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
              values,
              'user_ux4cNdoe5I82QS9ztaxr7'
            )
            .then((result) => {
              // console.log(result);
            })
            .catch((error) => {
              // console.log(error);
            });
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
            <form onSubmit={(formik.handleSubmit, handleTarget)}>
              <div className="mx-auto lg:w-1/2 md:w-2/3">
                <div className="flex flex-wrap -m-2">
                  <div className="w-1/2 p-2">
                    <input
                      type="text"
                      id="name"
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
                      id="email"
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
              <div className="text-lg text-red-500">{errMsg}</div>
            </form>
          </div>
          {show ? (
            <>
              <Modal
                show={show}
                onClick={() => {
                  setShow(false);
                }}
              >
                <div>
                  <Body>
                    <div>
                      <div>
                        <h1 className="text-xl text-center text-teal-500">
                          Thank you for contacting us
                        </h1>
                        <div className="relative w-64 h-64 mx-auto overflow-hidden">
                          <Lottie
                            options={defaultOptions}
                            height="auto"
                            width="100%"
                          />
                        </div>
                        <div className="w-full mt-5 ">
                          <p className="text-lg text-center text-blue-800">
                            Your message have been received successfully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Body>
                </div>
              </Modal>
            </>
          ) : null}
        </section>
      )}
    </Formik>
  );
}
