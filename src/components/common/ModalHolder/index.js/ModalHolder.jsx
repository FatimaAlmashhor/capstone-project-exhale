import React, { useState } from 'react'
import { useParams, useHistory, withRouter, useLocation } from 'react-router-dom';
import Signup from '../../../../containers/Signup';
import Singin from '../../../../containers/Login';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import fire, { uiConfig } from '../../../../firebase';
import Modal, { Header, Body } from '../../Modal';
import Lottie from 'react-lottie';
import hi from '../../../../Lottie/hello.json';

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
      <Modal show={show} onClick={handleClose}>
        <div>
          <Header
            title={id === 'login' ? 'SIGN IN' : 'SING UP'}
            onClick={handleClose}
          />
          <Body>
            <div className="flex flex-col w-auto md:flex-row-reverse">
              <div class="  mt-0 md:mt-3  md:border-l-2 md:ml-5 w-full md:w-2/5 ">
                <div className="hidden overflow-hidden md:block">
                  <Lottie isClickToPauseDisabled={true} options={defaultOptions} height="auto" width="120%" />
                </div>
                <div className="w-full mx-auto">
                  {isSignedIn ? null : (
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
