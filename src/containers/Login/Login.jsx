import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import { SIGNUP_ROUTE } from '../../routes';
import ResetPassword from '../../components/resetPassword/ResetPassword';
import Modal, { Header, Body } from '../../components/common/Modal/Modal';

const Login = () => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  });
  const handleClose = () => setShow(false);
  return (
    <div>
      {isSignedIn ? (
        <span>
          <div className="text-red-600">Logged In!</div>
        </span>
      ) : (
        <>
          <div className="my-2 text-center border-b">
            <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
              {t('with email')}
            </div>
          </div>
          <LoginForm />
          <button
            type="button"
            className="inline-block w-full text-sm font-normal text-center text-blue-600 align-baseline focus:outline-none hover:text-blue-800"
            onClick={() => {
              setShow(true);
            }}
          >
            {t('forgetpassword')}
          </button>
          {show ? (
            <div>
              <Modal show={show} onClick={handleClose}>
                <div>
                  <Header title={t('Reset')} onClick={handleClose} />
                  <Body>
                    <ResetPassword />
                  </Body>
                </div>
              </Modal>
            </div>
          ) : null}
          <p className="text-center text-gray-600 text-md">
            {t('haveAccount')}
            <Link
              className="px-2 text-blue-600 text-md focus:outline-none"
              to={{
                pathname: SIGNUP_ROUTE,
                state: { modal: location.state.modal },
              }}
            >
              {t('Create')}
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
