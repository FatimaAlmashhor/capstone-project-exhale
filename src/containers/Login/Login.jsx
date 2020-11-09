import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { uiConfig } from '../../firebase';
import Modal, { Header, Body } from '../../components/common/Modal';
import LoginForm from '../../components/LoginForm';
import Signup from '../Signup';

const Login = ({ show, onClick }) => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { t } = useTranslation();

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
                  <div className="my-2 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      {t('with email')}
                    </div>
                  </div>
                  <LoginForm />
                  <button
                    type="button"
                    className="inline-block text-center w-full focus:outline-none  align-baseline font-normal text-sm text-blue-600 hover:text-blue-800"
                  >
                    {t('forgetpassword')}
                  </button>
                  <p className=" text-center text-md  text-gray-600 ">
                    {t('haveAccount')}
                    <button
                      type="button"
                      onClick={() => {
                        setShowSignup(true);
                      }}
                      className="px-2 text-md text-blue-600 focus:outline-none"
                    >
                      {t('Create')}
                    </button>
                  </p>
                </div>
              </Body>
            </div>
          </Modal>
          {showSignup && (
            <Signup show={showSignup} onClick={() => setShowSignup(false)} />
          )}
        </>
      )}
      ;
    </div>
  );
};

export default Login;
Login.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
