import React  , {useState , useEffect} from 'react'
import {useParams , useHistory ,withRouter } from 'react-router-dom'
import Signup from '../../../containers/Signup';
import Singin from '../../../containers/Login'
function Modal() {
    let {id} = useParams() ;
    let history = useHistory () ;
    const [filling , setFilling ] = useState({
        title : 'TITLE' ,
        content : null
    });

    useEffect (() => {
        switch (id) {
            case 'signup':
                {
                    setFilling({
                        title : 'SING UP' ,
                        content : <Signup />
                    }) ;
                }
                break ;
            case 'login':
                {
                    setFilling({
                        title : 'SING IN' ,
                        content : <Singin />
                    }) ;
                }
                break ;
        }
        console.log(filling);
    } , [id])

    let handleClosing = (e) =>{
            history.goBack() 
            e.stopPropagation()
    }
    return (
        <div className=" flex items-center justify-center">
        
            <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className=" absolute w-full h-full bg-gray-900 opacity-50"></div>
            
            <div className="bg-white w-auto mx-auto rounded shadow-lg z-50 overflow-y-auto">
                
                <div 
                onClick = { handleClosing}
                className=" absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span className="text-sm">(Esc)</span>
                </div>
        
                <div className="py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className=" mb-8 text-3xl text-center self-center">
                            {filling.title}
                        </p>
                        <div
                            onClick = { handleClosing} 
                            className=" cursor-pointer self-start z-50">
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>
                    {filling.content}
                </div>
            </div>
            </div>
        </div>
    )
}

export default withRouter(Modal);
