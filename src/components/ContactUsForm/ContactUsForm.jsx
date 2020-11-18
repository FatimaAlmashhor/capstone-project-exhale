import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import received from '../../Lottie/message-received.json';
import Modal, { Body } from '../common/Modal';

export default function ContactUsForm() {
  const { t } = useTranslation();

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
        'Exhale_Project',
        'template_yu5s23r',
        e.target,
        'user_Uu00ojF2R1FaqDmvnK8bO'
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
    e.target.reset();
  };

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center py-8 text-center ">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl text-blue-700 ">{t('GetInTouch')}</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
              {t('contactus')}
            </p>
          </div>
        </div>
        <form onSubmit={handleTarget}>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('Name')}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="w-1/2 p-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('Email')}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="w-full p-2">
                <textarea
                  id="message"
                  name="message"
                  placeholder={t('Message')}
                  className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500"
                  required
                />
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
          <div className="text-lg text-center text-red-500">{errMsg}</div>
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
                      {t('Thank you for contacting us')}
                    </h1>
                    <div className="relative w-64 h-64 mx-auto overflow-hidden">
                      <Lottie
                        isClickToPauseDisabled
                        options={defaultOptions}
                        height="auto"
                        width="100%"
                      />
                    </div>
                    <div className="w-full mt-5 ">
                      <p className="text-lg text-center text-blue-800">
                        {t('Your message have been received successfully.')}
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
  );
}
