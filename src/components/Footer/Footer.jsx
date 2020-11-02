import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 w-full">
            <div className="container mx-auto px-8">
                <div className=" w-full">
                    <div class="block ">
                        <p class="uppercase text-grey text-2xl sm:mb-6">
                            LOGO
                        </p>
                    </div>
                    <div className='inline container z-10' >
                        <ul className =' flex flex-row '>
                            <li  className = 'flex-1 text-center text-gray-600'>SELF ASSESSMENT</li>
                            <li  className = 'flex-1 text-center text-gray-600'>ABOUT US</li>
                            <li  className = 'flex-1 text-center text-gray-600'>CONTACT US</li>
                        </ul>
                    </div>
                    <div className = 'block flex flex-row mt-8' >
                        <div className = 'flex-1 text-gray-400 text-sm'> 
                            Copyright @Exhale All right Reserved.
                        </div>
                        <div className = 'flex-auto '> 
                            <ul className ='flex flex-row-reverse '>
                                <li className = 'mx-3 cursor-pointer'>
                                    <a>
                                        <FontAwesomeIcon className ='text-gray-500 text-lg hover:text-green-300' icon={['fab', 'twitter']} />
                                    </a>
                                </li>
                                <li className = 'mx-3 cursor-pointer'>
                                    <a>
                                        <FontAwesomeIcon className ='text-gray-500 text-lg hover:text-green-300' icon={['fab', 'facebook']} />
                                    </a>
                                </li>
                                <li className = 'mx-3 cursor-pointer'>
                                    <a>
                                        <FontAwesomeIcon className ='text-gray-500 text-lg hover:text-green-300' icon = {['fab' , 'instagram']} />
                                    </a>
                                </li>
                                <li className = 'mx-3  cursor-pointer '>
                                    <a>
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
