import React, { useState } from 'react'
import { useParams, useHistory, withRouter, useLocation } from 'react-router-dom';
import Signup from '../../../../containers/Signup';
import Singin from '../../../../containers/Login';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import fire, { uiConfig } from '../../../../firebase';
import Modal, { Header, Body } from '../../Modal';
import Lottie from 'react-lottie';
import hello from '../../../../Lottie/hello.json';
import check from '../../../../Lottie/hi.json';

const ModalHolder = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  const [show, setShow] = useState(true);
  const [previsePath] = useState(history.location.state.modal);
  const [isSignedIn, setisSignedIn] = useState(false);

  React.useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  }, [location]);

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
      <Modal show={show} onClick={handleClose}>
        <div className="w-full xl:w-10/12">
          <Header
            title={id === 'login' ? 'SIGN IN' : 'SING UP'}
            onClick={handleClose}
          />
          <Body>
            <div className="flex flex-colw-full md:max-w-3xl xl:max-w-4xl md:flex-row-reverse">
              <div class="  mt-0 md:mt-3  md:border-l-2 md:ml-5 s md:w-2/5 ">
                <div className="hidden overflow-hidden md:block">
                  <Lottie isClickToPauseDisabled={true} options={defaultOptions(hello)} height="auto" width="120%" />
                </div>
                <div className=" w-full">
                  {isSignedIn ? <>
          <Modal
            show={isSignedIn}
            onClick={() => {
              handleClose()
            }}
          >
            <div>
              <Body>
                <div>
                  <div>
                    <Lottie
                      isClickToPauseDisabled
                      options={defaultOptions(check)}
                      height={300}
                      width={300}
                    />
                  </div>
                  <h1 className="mt-5 text-center text-blue-600">
                    Welcome To Our Site , We are Glad to have you here
                  </h1>
                </div>
              </Body>
            </div>
          </Modal>
        </> : (
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
                  )}      
                </div>
              </div>
              <div className="pr-3 mx-auto">
                {id === 'login' ? <Singin /> : <Signup />}
              </div>
            </div>
          </Body>
        </div>
      </Modal>
    </div>
  );
};

export default withRouter(ModalHolder);
