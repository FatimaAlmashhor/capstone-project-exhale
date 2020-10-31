
import React from 'react'
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
    return (
     //bg-gray-800
<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="lg:w-0 lg:flex-1">
        <Link to={HOME_ROUTE} class="flex">
          <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
       </Link>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
         
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        <NavLink to={HOME_ROUTE} class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
         HOME
        </NavLink>

        
        <NavLink to={DOCTORS_ROUTE} class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
         Doctors
        </NavLink>

        <NavLink to={ARTICLES_BASE_ROUTE} class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
         Articles
       </NavLink>

       <NavLink to={ABOUT_ROUTE} class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
        AboutUs
      </NavLink>

      <NavLink to={CONTACT_ROUTE} class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
       ContactUs
      </NavLink>

      <NavLink to={SELF_ASSESSMENT_ROUTE} class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
       Checkup
      </NavLink>
      </nav>
      <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
        <NavLink to={LOGIN_ROUTE} class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
         Login
        </NavLink>
        <span class="inline-flex rounded-md shadow-sm">
          <NavLink to={SIGNUP_ROUTE} class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
          Signup
          </NavLink>
        </span>
      </div>
    </div>
  </div>

 
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5 space-y-6">
          <div class="flex items-center justify-between">
            
            <div>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
            </div>
            <div class="-mr-2">
              <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
               
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <nav class="grid gap-y-8">
              <a href="#" class="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                 Home
              </a>
              <a href="#" class="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                 Home
              </a>
              <a href="#" class="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
               Home
              </a>
              <a href="#" class="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
              Home
              </a>
              <a href="#" class="-m-3 p-3 flex font-medium items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
               Home
              </a>  

            <div class="space-y-6">
             <span class="w-full flex rounded-md shadow-sm">
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Sign up
              </a>
             </span>
             <p class="text-center text-base leading-6 font-medium text-gray-500">
              Existing customer?
              <a href="#" class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                Sign in
              </a>
             </p>
            </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Navbar
