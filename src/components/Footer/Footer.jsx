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
  const [lang, changeLang] = useState('en');
  const changeLanguage = (lng) => {
    changeLang(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="inline-flex  mx-auto border-2 border-indigo-500 rounded overflow-hidden">
      <button
        id="btn-en"
        type="button"
        onClick={() => changeLanguage('en')}
        className={
          lang === 'en'
            ? 'py-1 px-4 hover:text-gray-500 focus:text-gray-500 focus:outline-none bg-indigo-500'
            : 'py-1 px-4 hover:text-gray-500 focus:text-gray-500 focus:outline-none '
        }
      >
        English
      </button>
      <button
        id="btn-ar"
        type="button"
        onClick={(e) => changeLanguage('ar', e)}
        className={
          lang === 'ar'
            ? 'py-1 px-4 hover:text-gray-500 focus:text-gray-500 focus:outline-none bg-indigo-500'
            : 'py-1 px-4 hover:text-gray-500 focus:text-gray-500 focus:outline-none '
        }
      >
        العربيه
      </button>
    </div>
  );
};
