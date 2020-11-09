import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import fire from '../../firebase';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Modal, { Header, Body } from '../../components/common/Modal';

const Signup = ({ show, onClick }) => {
  const [isSignedIn, setisSignedIn] = useState(false);
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
          <Modal show={show} onClick={onClick}>
            <div>
              <Header title="SING UP" onClick={onClick} />
              <Body>
                <div>
                  <div className="my-2 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      {t('with email')}
                    </div>
                  </div>
                  <RegisterForm />
                </div>
              </Body>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Signup;
Signup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
