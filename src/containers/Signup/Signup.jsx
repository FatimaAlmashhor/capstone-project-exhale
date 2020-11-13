import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import fire from '../../firebase';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { LOGIN_ROUTE } from '../../routes';

const Signup = () => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  });
  return (
    <div>
      {isSignedIn ? (
        <span>
          <div className="text-red-600">Signed In!</div>
        </span>
      ) : (
        <>
          <div>
            <div className="my-2 text-center border-b">
              <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                {t('with email')}
              </div>
            </div>
            <RegisterForm />
            <div>
              <p className="mt-5 text-sm text-gray-500">
                {t('haveAccount')}
                <Link
                  className="text-blue-500 cursor-pointer "
                  to={{
                    pathname: LOGIN_ROUTE,
                    state: { modal: location.state.modal },
                  }}
                >
                  {t('Login')}
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Signup;
