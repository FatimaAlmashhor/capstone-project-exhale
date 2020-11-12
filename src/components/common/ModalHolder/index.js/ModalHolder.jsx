import React, { useState } from 'react'
import { useParams, useHistory, withRouter ,useLocation } from 'react-router-dom';
import Signup from '../../../../containers/Signup';
import Singin from '../../../../containers/Login';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import fire, { uiConfig } from '../../../../firebase';
import Modal, { Header, Body } from '../../Modal';

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
    React.useEffect(()=>{
            console.log(location);
            console.log(previsePath);
    } , [location])
    return (
        <div>
            <Modal show={show} onClick={handleClose}>
            <div>
                <Header title={id === 'login' ? "SIGN IN" : "SING UP"} onClick={handleClose} />
               <Body>
               
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
            {
                id == 'login' ?(
                    <Singin />
                ):(
                    <Signup />
                )
            }
               </Body>
                </div>
            </Modal>
        </div>
    )
}

export default withRouter(ModalHolder);
