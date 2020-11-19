import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <footer className="relative pt-8 pb-6 bg-blue-800">
      <div
        className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
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
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-4/12">
            <h4 className="pb-4 text-3xl font-semibold text-gray-200 border-b">
              {t('What is a Exhale')}
              <span className="text-4xl text-red-500">?</span>
            </h4>
            <h5 className="pt-2 mt-0 mb-2 text-gray-400 text-md">
              {t('What is Exhale answer')}
            </h5>
          </div>
          <div className="w-full px-4 md:w-8/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full pt-6 ml-auto text-center md:w-6/12 xl:w-4/12 md:pt-0 md:px-4">
                <span className="block pt-4 mb-2 text-sm font-semibold text-white uppercase">
                  {t('Pages')}
                </span>
                <ul className="text-gray-400 list-unstyled">
                  <li>
                    <Link to={HOME_ROUTE}>{t('HOME')}</Link>
                  </li>
                  <li>
                    <Link to={ARTICLES_BASE_ROUTE}>{t('Articles')}</Link>
                  </li>
                  <li>
                    <Link to={DOCTORS_ROUTE}>{t('Doctors')}</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full pt-6 ml-auto text-center md:w-6/12 xl:w-4/12 md:pt-0 md:px-4">
                <span className="block pt-4 mb-2 text-sm font-semibold text-white uppercase">
                  {t('Team')}
                </span>
                <ul className="text-gray-400 list-unstyled">
                  <Link to={ABOUT_ROUTE}>{t('AboutUs')}</Link>
                  <li>
                    <Link to={CONTACT_ROUTE}>{t('GetInTouch')}</Link>
                  </li>
                  <li>
                    <span className="block mt-8 mb-2 text-sm font-semibold text-white uppercase">
                      {t('selfAssessment')}
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link to={SELF_ASSESSMENT_ROUTE}>{t('Checkup')}</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row-reverse w-full mt-10 text-right">
                <DropdownButton />
              </div>
              <div className="w-full pt-6 ml-auto text-center md:w-6/12 xl:w-4/12 md:pt-0 md:px-4" />
            </div>
          </div>
        </div>
        <div className="my-6 border-t border-gray-400">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="mt-6">
                <ul className="flex justify-center flex-auto">
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
              <div className="py-1 text-sm font-semibold text-gray-300">
                {t('CopyRight')}
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
    <div className="inline-flex mx-auto overflow-hidden text-gray-400 border-2 border-indigo-500 rounded md:mx-0 lg:mx-0">
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
        العربية
      </button>
    </div>
  );
};
