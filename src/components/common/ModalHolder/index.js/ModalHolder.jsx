import React, { useState } from 'react'
import { useParams, useHistory, withRouter } from 'react-router-dom';
import Signup from '../../../../containers/Signup';
import Singin from '../../../../containers/Login';

const ModalHolder = () => {
    let {id} = useParams() ;
    let history = useHistory () ;
    let [show , setShow] = useState(true)
  
    React.useEffect(()=>{
        console.log(id);
    } , [])
    return (
        <div>
            {
                id == 'login' ?(
                    <Singin show={show} onClick={()=> {setShow(false);  history.goBack() }}/>
                ):(
                    <Signup show={show} onClick={()=> {setShow(false);  history.goBack() }}/>
                )
            }
        </div>
    )
}

export default withRouter(ModalHolder);
