/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ABOUT_ROUTE, CONTACT_ROUTE, SELF_ASSESSMENT_ROUTE } from '../../routes';
import i18n from '../../i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full pt-12 pb-4 text-white bg-blue-800 border-t-2">
      <div className="container px-8 mx-auto">
        <div className="w-full ">
          <div className="block ">
            <h1 className="text-3xl font-medium transition duration-150 ease-in-out text-black-500">
              <span className="text-4xl font-black text-white">EX</span>
              hale
            </h1>
          </div>
          <div className="container z-10 inline px-18">
            <ul className="flex flex-col md:flex-row">
              <li className="flex-1 text-center text-white">
                <Link to={SELF_ASSESSMENT_ROUTE}>{t('Checkup')}</Link>
              </li>
              <li className="flex-1 text-center text-white">
                <Link to={ABOUT_ROUTE}>{t('AboutUs')}</Link>
              </li>
              <li className="flex-1 text-center text-white">
                <Link to={CONTACT_ROUTE}>{t('ContactUs')}</Link>
              </li>
              <li>
                <DropdownButton />
              </li>
            </ul>
          </div>
          <div className="flex flex-row block mt-8">
            <div className="flex-1 text-sm text-gray-400">
              Copyright &copy; 2020 Exhale. All rights Reserved.
            </div>
            <div className="flex-auto">
              <ul className="flex flex-row-reverse">
                <li className="mx-3 cursor-pointer">
                  <a href=" ">
                    <FontAwesomeIcon
                      className="text-lg text-gray-500 hover:text-white"
                      icon={['fab', 'twitter']}
                    />
                  </a>
                </li>
                <li className="mx-3 cursor-pointer">
                  <a href=" ">
                    <FontAwesomeIcon
                      className="text-lg text-gray-500 hover:text-white"
                      icon={['fab', 'facebook']}
                    />
                  </a>
                </li>
                <li className="mx-3 cursor-pointer">
                  <a href=" ">
                    <FontAwesomeIcon
                      className="text-lg text-gray-500 hover:text-white"
                      icon={['fab', 'instagram']}
                    />
                  </a>
                </li>
                <li className="mx-3 cursor-pointer ">
                  <a href=" ">
                    <FontAwesomeIcon
                      className="text-lg text-gray-500 hover:text-white"
                      icon={['fab', 'linkedin']}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const DropdownButton = () => {
  const [show, setShow] = useState(false);
  const [Language, setLanguage] = useState(i18n.language);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShow(false);
    setLanguage(lng);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            onClick={() => setShow(!show)}
          >
            {Language === 'en' ? 'English' : 'العربيه'}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${
          show ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white rounded-md shadow-xs">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              type="button"
              onClick={() => changeLanguage('ar')}
              className="block w-full text-right px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              العربية
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className="block w-full text-right px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
