import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { uiConfig } from '../../firebase';
import Modal, { Header, Body } from '../../components/common/Modal';
import LoginForm from '../../components/LoginForm';
import { SIGNUP_ROUTE } from '../../routes';

const Login = ({ show, onClick }) => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  });
  return (
    <div>
      {isSignedIn ? (
        <span>
          <div className="text-red-600">Logged In!</div>
        </span>
      ) : (
        <>
          <Modal show={show} onClick={onClick}>
            <div>
              <Header title="SIGN IN" onClick={onClick} />
              <Body>
                <div>
                  <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                  <div className="my-2 text-center border-b">
                    <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                      {t('with email')}
                    </div>
                  </div>
                  <LoginForm />
                  <button
                    type="button"
                    className="inline-block w-full text-sm font-normal text-center text-blue-600 align-baseline focus:outline-none hover:text-blue-800"
                  >
                    {t('forgetpassword')}
                  </button>
                  <p className="text-center text-gray-600 text-md">
                    {t('haveAccount')}
                    <Link
                      className="px-2 text-blue-600 text-md focus:outline-none"
                      to={{
                        pathname: SIGNUP_ROUTE,
                        state: { modal: location },
                      }}
                    >
                      {t('Create')}
                    </Link>
                  </p>
                </div>
              </Body>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Login;
Login.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
