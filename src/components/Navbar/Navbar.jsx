import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  HOME_ROUTE,
  DOCTORS_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  SELF_ASSESSMENT_ROUTE,
  ARTICLES_BASE_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from '../../routes';
import fire from '../../firebase';

function Navbar() {
  const { t } = useTranslation();
  const [isExpanded, toggleExpansion] = useState(false);
  const [isSignedIn, setisSignedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  });
  return (
    <div className="relative z-50 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 lg:justify-start lg:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link to={HOME_ROUTE} class="flex">
              <h1 className="text-3xl font-medium transition duration-150 ease-in-out text-black-500">
                <span className="text-4xl font-black text-blue-800">EX</span>
                hale
              </h1>
            </Link>
          </div>
          <nav className="hidden space-x-10 lg:flex">
            <NavLink
              to={HOME_ROUTE}
              className="pb-2 text-base font-medium leading-6 text-blue-900 transition duration-150 ease-in-out border-b border-white hover:text-gray-500 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:text-gray-900"
            >
              {t('HOME')}
            </NavLink>

            <NavLink
              to={DOCTORS_ROUTE}
              className="pb-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out border-b border-white hover:text-gray-900 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:text-gray-900"
            >
              {t('Doctors')}
            </NavLink>

            <NavLink
              to={ARTICLES_BASE_ROUTE}
              className="pb-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out border-b border-white hover:text-gray-900 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:text-gray-900"
            >
              {t('Articles')}
            </NavLink>

            <NavLink
              to={ABOUT_ROUTE}
              className="pb-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out border-b border-white hover:text-gray-900 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:text-gray-900"
            >
              {t('AboutUs')}
            </NavLink>

            <NavLink
              to={CONTACT_ROUTE}
              className="pb-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out border-b border-white hover:text-gray-900 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:text-gray-900"
            >
              {t('ContactUs')}
            </NavLink>
          </nav>
          <div className="items-center justify-end hidden space-x-8 lg:flex lg:flex-1 lg:w-0">
            {isSignedIn ? (
              <button
                className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => fire.auth().signOut()}
              >
                {t('Logout')}
              </button>
            ) : (
              <>
                <NavLink
                  className="pb-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap border-b border-white hover:text-gray-900 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:text-gray-900"
                  to={{
                    pathname: SIGNUP_ROUTE,
                    state: { modal: location },
                  }}
                >
                  {t('Signup')}
                </NavLink>
                <NavLink
                  className="pb-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap border-b border-white hover:text-gray-900 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:text-gray-900"
                  to={{
                    pathname: LOGIN_ROUTE,
                    state: { modal: location },
                  }}
                >
                  {t('Login')}
                </NavLink>
              </>
            )}
            <span className="inline-flex rounded-lg shadow-sm">
              <NavLink
                to={SELF_ASSESSMENT_ROUTE}
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-lg hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
              >
                {t('Checkup')}
              </NavLink>
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden">
        <div className="rounded-lg shadow-lg">
          <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
            <div className="px-5 pt-5 pb-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-medium transition duration-150 ease-in-out text-black-500">
                    <span className="text-4xl font-black text-blue-800">EX</span>
                    hale
                  </h1>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => toggleExpansion(!isExpanded)}
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`${isExpanded ? `block` : `hidden`}  font-medium`}>
                <nav className="grid gap-y-8">
                  <NavLink
                    to={HOME_ROUTE}
                    className="flex items-center p-3 pb-2 -m-3 space-x-3 font-medium transition duration-150 ease-in-out border-b rounded-md hover:bg-gray-50 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500"
                  >
                    {t('HOME')}
                  </NavLink>

                  <NavLink
                    to={DOCTORS_ROUTE}
                    className="flex items-center p-3 pb-2 -m-3 space-x-3 font-medium transition duration-150 ease-in-out border-b rounded-md hover:bg-gray-50 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500"
                  >
                    {t('Doctors')}
                  </NavLink>

                  <NavLink
                    to={ARTICLES_BASE_ROUTE}
                    className="flex items-center p-3 pb-2 -m-3 space-x-3 font-medium transition duration-150 ease-in-out border-b rounded-md hover:bg-gray-50 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500"
                  >
                    {t('Articles')}
                  </NavLink>
                  <NavLink
                    to={ABOUT_ROUTE}
                    className="flex items-center p-3 pb-2 -m-3 space-x-3 font-medium transition duration-150 ease-in-out border-b rounded-md hover:bg-gray-50 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500"
                  >
                    {t('AboutUs')}
                  </NavLink>

                  <NavLink
                    to={CONTACT_ROUTE}
                    className="flex items-center p-3 pb-2 -m-3 space-x-3 font-medium transition duration-150 ease-in-out border-b rounded-md hover:bg-gray-50 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500"
                  >
                    {t('ContactUs')}
                  </NavLink>

                  {isSignedIn ? (
                    <>
                      <div className="space-y-6">
                        <span className="flex w-full rounded-md shadow-sm">
                          <NavLink
                            to={SELF_ASSESSMENT_ROUTE}
                            className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                          >
                            {t('Checkup')}
                          </NavLink>
                        </span>
                      </div>
                      <button
                        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => fire.auth().signOut()}
                      >
                        {t('Logout')}
                      </button>
                    </>
                  ) : (
                    <>
                      <NavLink
                        className="flex items-center p-3 pb-2 -m-3 space-x-3 font-medium transition duration-150 ease-in-out border-b rounded-md hover:bg-gray-50 hover:border-b hover:pb-2 hover:border-gray-500 focus:border-gray-500"
                        to={{
                          pathname: SIGNUP_ROUTE,
                          state: { modal: location },
                        }}
                      >
                        {t('Signup')}
                      </NavLink>
                      <div className="space-y-6">
                        <span className="flex w-full rounded-md shadow-sm">
                          <NavLink
                            to={SELF_ASSESSMENT_ROUTE}
                            className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                          >
                            {t('Checkup')}
                          </NavLink>
                        </span>
                        <p className="text-base font-medium leading-6 text-center text-gray-500">
                          Existing User?&nbsp;
                          <NavLink
                            to={{
                              pathname: LOGIN_ROUTE,
                              state: { modal: location },
                            }}
                            className="text-blue-700 transition duration-150 ease-in-out hover:text-blue-500"
                          >
                            {t('Login')}
                          </NavLink>
                        </p>
                      </div>
                    </>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
