/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  SELF_ASSESSMENT_ROUTE,
  HOME_ROUTE,
  DOCTORS_ROUTE,
  ARTICLES_BASE_ROUTE,
} from '../../routes';
import i18n from '../../i18next';

const Footer = () => {
  return (
    <footer className="relative bg-blue-800 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: '80px', transform: 'translateZ(0px)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blue-800 fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 px-4">
            <h4 className="text-3xl font-semibold text-gray-200 border-b pb-4">
              What is a Exhale
              <span className="text-4xl text-red-500">?</span>
            </h4>
            <h5 className="text-md mt-0 mb-2 text-gray-400 pt-2">
              Mental health includes our emotional, psychological, and social
              well-being. It affects how we think, feel, and act. It also helps
              determine how we handle stress, relate to others, and make choices.
              Mental health is important at every stage of life, from childhood and
              adolescence through adulthood.
            </h5>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full text-center md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block pt-4 uppercase text-white text-sm font-semibold mb-2">
                  Pages
                </span>
                <ul className="list-unstyled text-gray-400">
                  <li>
                    <Link to={HOME_ROUTE}>Home</Link>
                  </li>
                  <li>
                    <Link to={ARTICLES_BASE_ROUTE}>Article</Link>
                  </li>
                  <li>
                    <Link to={DOCTORS_ROUTE}>Doctors</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 text-center xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block pt-4 uppercase text-white text-sm font-semibold mb-2">
                  Team
                </span>
                <ul className="list-unstyled text-gray-400">
                  <Link to={ABOUT_ROUTE}>About Us</Link>
                  <li>
                    <Link to={CONTACT_ROUTE}> Get in touch</Link>
                  </li>
                  <li>
                    <span className="block mt-8 uppercase text-white text-sm font-semibold mb-2">
                      Self assessment
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link to={SELF_ASSESSMENT_ROUTE}>Checkup</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mt-10 flex  justify-self-end w-full text-right">
                <DropdownButton />
              </div>
              <div className="w-full md:w-6/12 text-center xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto" />
            </div>
          </div>
        </div>
        <div className="my-6 border-gray-400 border-t">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="mt-6">
                <ul className="flex flex-auto justify-center">
                  <li className="mx-3 cursor-pointer">
                    <a href=" ">
                      <FontAwesomeIcon
                        className="text-lg text-gray-300 hover:text-white"
                        icon={['fab', 'twitter']}
                      />
                    </a>
                  </li>
                  <li className="mx-3 cursor-pointer">
                    <a href=" ">
                      <FontAwesomeIcon
                        className="text-lg text-gray-300 hover:text-white"
                        icon={['fab', 'facebook']}
                      />
                    </a>
                  </li>
                  <li className="mx-3 cursor-pointer">
                    <a href=" ">
                      <FontAwesomeIcon
                        className="text-lg text-gray-300 hover:text-white"
                        icon={['fab', 'instagram']}
                      />
                    </a>
                  </li>
                  <li className="mx-3 cursor-pointer ">
                    <a href=" ">
                      <FontAwesomeIcon
                        className="text-lg text-gray-300 hover:text-white"
                        icon={['fab', 'linkedin']}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-sm text-gray-300 font-semibold py-1">
                Copyright © 2020 Exhale Inc
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const DropdownButton = () => {
  const [lang, changeLang] = useState(
    i18n.language || window.localStorage.i18nextLng
  );
  const changeLanguage = (lng) => {
    changeLang(lng);
    i18n.changeLanguage(lng);
  };
  return (
    <div className="inline-flex text-gray-400 mx-auto border-2 border-indigo-500 rounded overflow-hidden">
      <button
        id="btn-en"
        type="button"
        onClick={() => changeLanguage('en')}
        className={
          lang === 'en'
            ? 'py-1 px-4 hover:text-gray-500 focus:text-gray-200 focus:outline-none bg-indigo-500'
            : 'py-1 px-4 hover:text-gray-500 focus:text-gray-200 focus:outline-none '
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
            ? 'py-1 px-4 hover:text-gray-500 focus:text-gray-200 focus:outline-none bg-indigo-500'
            : 'py-1 px-4 hover:text-gray-500 focus:text-gray-200 focus:outline-none '
        }
      >
        العربيه
      </button>
    </div>
  );
};
