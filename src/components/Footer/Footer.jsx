import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom' ;
import {
    ABOUT_ROUTE,
    CONTACT_ROUTE,
    SELF_ASSESSMENT_ROUTE,
  } from '../../routes';
const Footer = () => {
    return (
        <footer className="bg-white border-t-2 mt-8 pt-8 pb-4 w-full">
            <div className="container mx-auto px-8">
                <div className=" w-full">
                    <div class="block ">
                        <p class="uppercase text-grey text-2xl sm:mb-6">
                            LOGO
                        </p>
                    </div>
                    <div className='inline container z-10' >
                        <ul className ='flex flex-col md:flex-row'>
                            <li  className = 'flex-1 text-center text-gray-600'>
                                <Link 
                                    to = {SELF_ASSESSMENT_ROUTE}>SELF ASSESSMENT</Link>
                            </li>
                            <li  className = 'flex-1 text-center text-gray-600'>
                                <Link to ={ABOUT_ROUTE}>ABOUT US</Link>
                            </li>
                            <li  className = 'flex-1 text-center text-gray-600'>
                                <Link to ={CONTACT_ROUTE}>CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                    <div className = 'block flex flex-row mt-8' >
                        <div className = 'flex-1 text-gray-400 text-sm'> 
                            Copyright @Exhale All right Reserved.
                        </div>
                        <div className = 'flex-auto'> 
                            <ul className ='flex flex-row-reverse'>
                                <li className = 'mx-3 cursor-pointer'>
                                    <a href=''>
                                        <FontAwesomeIcon className ='text-gray-500 text-lg hover:text-green-300' icon={['fab', 'twitter']} />
                                    </a>
                                </li>
                                <li className = 'mx-3 cursor-pointer'>
                                    <a href=''>
                                        <FontAwesomeIcon className ='text-gray-500 text-lg hover:text-green-300' icon={['fab', 'facebook']} />
                                    </a>
                                </li>
                                <li className = 'mx-3 cursor-pointer'>
                                    <a href=''>
                                        <FontAwesomeIcon className ='text-gray-500 text-lg hover:text-green-300' icon = {['fab' , 'instagram']} />
                                    </a>
                                </li>
                                <li className = 'mx-3  cursor-pointer '>
                                    <a href=''>
                                        <FontAwesomeIcon className ='text-gray-500 text-lg hover:text-green-300' icon={['fab', 'linkedin']} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
