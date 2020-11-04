import React from 'react';
import { Link, NavLink , useLocation } from 'react-router-dom';
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
  let location = useLocation();
  return (
    <ul>
      <li>
        <Link to={HOME_ROUTE}>LOGO</Link>
      </li>
      <li>
      <NavLink 
          to = {{
            pathname : LOGIN_ROUTE ,
            state : { modal: location }
          }}>
            Login
        </NavLink>
      </li>
      <li>
        <NavLink 
          to = {{
            pathname : SIGNUP_ROUTE ,
            state : { modal: location }
          }}>
            Signup
        </NavLink>
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
