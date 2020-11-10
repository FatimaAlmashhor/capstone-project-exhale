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
}) {
  return (
    <div className="max-w-screen-sm overflow-hidden rounded  md:max-w-xs lg:max-w-xs">
      <img
        className="w-full"
        src="https://cdn.benchmark.pl/uploads/article/72855/MODERNICON/4f91fb01300b74ba42dcf080665285f3f56bd4ff.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">
          <span>{name}</span>
        </div>
        <p className="text-base text-gray-700">
          <span>Specialty :</span>
          {specialty}
        </p>
        <p className="text-base text-gray-700">
          <span>Work Place :</span>
          {workplace}
        </p>
        <p className="text-base text-gray-700">
          <span>Address :</span>
          {address}
        </p>
        <p className="text-base text-gray-700">
          <span>Email :</span>
          {email}
        </p>
        <p className="text-base text-gray-700">
          <span>Phone :</span>
          {phone}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <FontAwesomeIcon className="text-lg text-black" icon={['fab', 'twitter']} />
        <FontAwesomeIcon className="mx-3 text-lg" icon={['fab', 'facebook']} />
        <FontAwesomeIcon className="mx-3 text-lg" icon={['fab', 'linkedin']} />
        <FontAwesomeIcon className="mx-3 text-lg" icon={['fab', 'instagram']} />
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
};
DoctorCard.defaultProps = {
  workplace: 'dose not add work place yet',
  address: 'dose not add address yet',
  email: 'dose not add email yet',
  phone: 555555555555,
};
