import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link to={HOME_ROUTE} class="flex">
              <h1 className="font-medium text-3xl text-black-500 transition ease-in-out duration-150">
                <span className="text-4xl text-blue-800 font-black">EX</span>
                hale
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <NavLink
              to={HOME_ROUTE}
              class="text-base leading-6 font-medium text-blue-900 hover:text-gray-500 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              HOME
            </NavLink>
            <NavLink
              to={DOCTORS_ROUTE}
              class="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Doctors
            </NavLink>

            <NavLink
              to={ARTICLES_BASE_ROUTE}
              class="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Articles
            </NavLink>

            <NavLink
              to={ABOUT_ROUTE}
              class="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              AboutUs
            </NavLink>

            <NavLink
              to={CONTACT_ROUTE}
              class="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              ContactUs
            </NavLink>

            <NavLink
              to={SELF_ASSESSMENT_ROUTE}
              class="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Checkup
            </NavLink>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <NavLink
              to={LOGIN_ROUTE}
              class="whitespace-no-wrap text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Login
            </NavLink>
            <span className="inline-flex rounded-md shadow-sm">
              <NavLink
                to={SIGNUP_ROUTE}
                class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
              >
                Signup
              </NavLink>
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-medium text-3xl text-black-500 transition ease-in-out duration-150">
                    <span className="text-4xl text-blue-800 font-black">EX</span>
                    hale
                  </h1>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => toggleExpansion(!isExpanded)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
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
                    className="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to={DOCTORS_ROUTE}
                    className="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    Doctors
                  </NavLink>

                  <NavLink
                    to={ARTICLES_BASE_ROUTE}
                    className="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    Articles
                  </NavLink>
                  <NavLink
                    to={ABOUT_ROUTE}
                    className="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    AboutUs
                  </NavLink>

                  <NavLink
                    to={CONTACT_ROUTE}
                    className="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    ContactUs
                  </NavLink>

                  <NavLink
                    to={SELF_ASSESSMENT_ROUTE}
                    className="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    Checkup
                  </NavLink>

                  <div className="space-y-6">
                    <span className="w-full flex rounded-md shadow-sm">
                      <NavLink
                        to={SIGNUP_ROUTE}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                      >
                        Sign up
                      </NavLink>
                    </span>
                    <p className="text-center text-base leading-6 font-medium text-gray-500">
                      Existing User?
                      <NavLink
                        to={LOGIN_ROUTE}
                        className="text-blue-700 hover:text-blue-500 transition ease-in-out duration-150"
                      >
                        Sign in
                      </NavLink>
                    </p>
                  </div>
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
