import React from 'react';
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

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to={HOME_ROUTE}>LOGO</Link>
      </li>
      <li>
        <NavLink to={LOGIN_ROUTE}>Login</NavLink>
      </li>
      <li>
        <NavLink to={SIGNUP_ROUTE}>Signup</NavLink>
      </li>
      <li>
        <NavLink to={DOCTORS_ROUTE}>Doctors</NavLink>
      </li>
      <li>
        <NavLink to={ARTICLES_BASE_ROUTE}>Articles</NavLink>
      </li>
      <li>
        <NavLink to={ABOUT_ROUTE}>About</NavLink>
      </li>
      <li>
        <NavLink to={CONTACT_ROUTE}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={SELF_ASSESSMENT_ROUTE}>Checkup</NavLink>
      </li>
      <li>
        <NavLink to={HOME_ROUTE}>Home</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
