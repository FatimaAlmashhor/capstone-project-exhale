import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import PropType from 'prop-types' ;
import '../../fontawesome' ;
export default function DoctorCard({name , specialty , workplace , address ,email , phone}) {

    return (
        <div className=' max-w-screen-sm md:max-w-xs lg:max-w-xs rounded overflow-hidden'>
            <img 
                className="w-full"
                src="https://cdn.benchmark.pl/uploads/article/72855/MODERNICON/4f91fb01300b74ba42dcf080665285f3f56bd4ff.jpg" 
                alt="Sunset in the mountains" 
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> 
                    <span>
                        {name}
                    </span> 
                </div>
                <p className="text-gray-700 text-base"> 
                    <span>
                       Specialty : 
                    </span>
                    {specialty}
                </p>
                <p className="text-gray-700 text-base"> 
                    <span>
                       Work Place : 
                    </span>
                    {workplace}
                </p>
                <p className="text-gray-700 text-base"> 
                    <span>
                        Address : 
                    </span>
                    {address}
                </p>
                <p className="text-gray-700 text-base"> 
                    <span>
                         Email : 
                    </span>
                    {email}
                </p>
                <p className="text-gray-700 text-base"> 
                    <span>
                        Phone : 
                    </span>
                    {phone}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <FontAwesomeIcon className='text-lg text-black' icon={['fab', 'twitter']}  />
                <FontAwesomeIcon className='text-lg mx-3' icon = {['fab' , 'facebook']} />
                <FontAwesomeIcon className='text-lg mx-3' icon = {['fab' , 'linkedin']} />
                <FontAwesomeIcon className='text-lg mx-3' icon = {['fab' , 'instagram']} />
            </div>
        </div>
    )
}

DoctorCard.propTypes = {
    name : PropType.string.isRequired ,
    specialty : PropType.string.isRequired ,
    workplace : PropType.string ,
    address : PropType.string ,
    email : PropType.string ,
    phone : PropType.number 
}
DoctorCard.defaultProps  = {
    workplace : 'dose not add work place yet' , 
    address : 'dose not add address yet' , 
    email : 'dose not add email yet' , 
    phone : 555555555555 , 
}