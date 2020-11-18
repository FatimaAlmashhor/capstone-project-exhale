import React, { useState } from 'react'
import { useParams, useHistory, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Signup from '../../../../containers/Signup';
import Singin from '../../../../containers/Login';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import fire, { uiConfig } from '../../../../firebase';
import Modal, { Header, Body } from '../../Modal';
import Lottie from 'react-lottie';
import hello from '../../../../Lottie/hello.json';

const ModalHolder = () => {
  const { id } = useParams();
  const history = useHistory();
  const { t } = useTranslation();

  const [show, setShow] = useState(true);
  const [previsePath] = useState(history.location.state.modal);
  const [isSignedIn, setisSignedIn] = useState(false);

  React.useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  }, );

  const handleClose = () => {
    setShow(false);
    history.push(previsePath);
  };
  const defaultOptions =(lottie) => ({
    loop: false,
    autoplay: true,
    animationData:lottie ,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });
  return (
    <div>
      {isSignedIn ? null : (
        <Modal show={show} onClick={handleClose}>
          <div className="w-full ">
            <Header
              title={id === 'login' ? t('Login') : t('SignUP')}
              onClick={handleClose}
            />
            <Body>
              <div className="flex flex-colw-full md:max-w-3xl xl:max-w-4xl md:flex-row-reverse">
                <div class="  mt-0 md:mt-3  md:border-l-2 md:ml-5 s md:w-2/5 ">
                  <div className="hidden overflow-hidden md:block">
                    <Lottie
                      isClickToPauseDisabled={true}
                      options={defaultOptions(hello)}
                      height="auto"
                      width="120%"
                    />
                  </div>
                  <div className=" w-full">
                    <StyledFirebaseAuth
                      uiConfig={uiConfig}
                      firebaseAuth={fire.auth()}
                    />
                  </div>
                </div>
                <div className="pr-3 mx-auto">
                  {id === 'login' ? <Singin /> : <Signup />}
                </div>
              </div>
            </Body>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default withRouter(ModalHolder);
