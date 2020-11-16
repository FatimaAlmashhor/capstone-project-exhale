import React, { useState } from 'react'
import { useParams, useHistory, withRouter ,useLocation } from 'react-router-dom';
import Signup from '../../../../containers/Signup';
import Singin from '../../../../containers/Login';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import fire, { uiConfig } from '../../../../firebase';
import Modal, { Header, Body } from '../../Modal';
import Lottie from 'react-lottie';
import hi from '../../../../Lottie/hello.json';

const ModalHolder = () => {
    const {id} = useParams() ;
    const history = useHistory () ;
    const location = useLocation();
    const [show , setShow] = useState(true)
    const [previsePath , setPreviesPath] = useState(history.location.state.modal)
  
    const handleClose = () => {
        setShow(false)
        history.push(previsePath) 
    }
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
                <Header title={id === 'login' ? "SIGN IN" : "SING UP"} onClick={handleClose} />
               <Body>
                <div className ='flex flex-col md:flex-row-reverse'>
                  <div class='  mt-0 md:mt-3  md:border-l-2 w-full md:w-2/5 '>
                   <div className ="overflow-hidden hidden md:block">
                     <Lottie options={defaultOptions} height='auto' width='120%' />
                   </div>
                   <div className='mx-auto w-full'>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
                   </div>
                  </div>
                  <div>
                     {
                      id == 'login' ?(
                        <Singin />
                      ):(
                        <Signup />
                     )
                     }
                    </div>
                     </div>
               </Body>
                </div>
            </Modal>
        </div>
    )
}

export default withRouter(ModalHolder);
