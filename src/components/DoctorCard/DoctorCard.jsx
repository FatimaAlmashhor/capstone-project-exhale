import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropType from 'prop-types';
import '../../fontawesome';

export default function DoctorCard({
  name,
  specialty,
  workplace,
  address,
  email,
  phone,
  img,
  show,
}) {
  return (
    <div className="max-w-screen-sm overflow-hidden md:max-w-xs lg:max-w-xs">
      <div className="w-40 mx-auto mt-5 border-4 border-blue-700 rounded-full">
        <img className="w-40 h-40 rounded-full" src={img} alt="Doctor" />
      </div>
      <div className="px-6 py-4 mx-auto">
        <div className="mx-auto mb-2 text-xl font-bold text-center">
          <span>{name}</span>
        </div>
        {show && (
          <>
            <p className="text-base text-center text-gray-700">
              <span>Specialty :</span>
              {specialty}
            </p>
            <p className="text-base text-center text-gray-700">
              <span>Work Place :</span>
              {workplace}
            </p>
            <p className="text-base text-center text-gray-700">
              <span>Address :</span>
              {address}
            </p>
            <p className="text-base text-center text-gray-700">
              <span>Email :</span>
              {email}
            </p>
            <p className="text-base text-center text-gray-700">
              <span>Phone :</span>
              {phone}
            </p>
          </>
        )}
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <FontAwesomeIcon
          className="text-lg text-gray-600 cursor-pointer hover:text-blue-400"
          icon={['fab', 'twitter']}
        />
        <FontAwesomeIcon
          className="mx-3 text-lg text-gray-600 cursor-pointer hover:text-blue-700"
          icon={['fab', 'facebook']}
        />
        <FontAwesomeIcon
          className="mx-3 text-lg text-gray-600 cursor-pointer hover:text-blue-700"
          icon={['fab', 'linkedin']}
        />
        <FontAwesomeIcon
          className="mx-3 text-lg text-gray-600 cursor-pointer hover:text-red-700"
          icon={['fab', 'instagram']}
        />
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  name: PropType.string.isRequired,
  specialty: PropType.string.isRequired,
  workplace: PropType.string,
  address: PropType.string,
  email: PropType.string,
  phone: PropType.number,
  img: PropType.string,
  show: PropType.bool,
};
DoctorCard.defaultProps = {
  workplace: 'dose not add work place yet',
  address: 'dose not add address yet',
  email: 'dose not add email yet',
  phone: 555555555555,
  show: false,
  img: 'https://www.shareicon.net/data/512x512/2016/08/18/813849_people_512x512.png',
};
