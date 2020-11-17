import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import fire from '../../firebase';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { LOGIN_ROUTE } from '../../routes';
import Modal, { Body } from '../../components/common/Modal/Modal';
import hi from '../../Lottie/hi.json';

const Signup = () => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const { t } = useTranslation();
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
      if (isSignedIn) {
        setTimeout(() => {
          history.push('/');
        }, 3000);
      }
    });
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hi,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      {isSignedIn ? (
        <>
          <Modal
            show={isSignedIn}
            onClick={() => {
              setisSignedIn(false);
            }}
          >
            <div>
              <Body>
                <div>
                  <div>
                    <Lottie options={defaultOptions} height={300} width={300} />
                  </div>
                  <h1 className="text-center mt-5 text-blue-600">
                    Welcome To Our Site , We are Glad to have you here
                  </h1>
                </div>
              </Body>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <div>
            <div className="my-2 text-center border-b">
              <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                {t('with email')}
              </div>
            </div>
            <RegisterForm />
            <div className="text-center ">
              <p className="mt-1 text-sm text-gray-500">
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
