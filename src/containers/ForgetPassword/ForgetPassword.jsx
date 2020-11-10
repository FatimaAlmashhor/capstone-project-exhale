import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { uiConfig } from '../../firebase';
import Modal, { Header, Body } from '../../components/common/Modal';
import ForgetPWForm from '../../components/forgetPWForm/ForgetPWForm';
import { SIGNUP_ROUTE, LOGIN_ROUTE } from '../../routes';

const ForgetPassword = ({ show, onClick }) => {
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
              <Header title="Forget Password" onClick={onClick} />
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
                  <ForgetPWForm />
                  <div>
                    <Link
                      className="px-2 text-blue-600 text-md focus:outline-none"
                      to={{
                        pathname: LOGIN_ROUTE,
                        state: { modal: location },
                      }}
                    >
                      {t('login')}
                    </Link>
                  </div>
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

export default ForgetPassword;
ForgetPassword.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
