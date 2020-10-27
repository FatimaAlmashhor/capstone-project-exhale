import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../fontawesome';
import PropType from 'prop-types';
import defaultImg from './teamImgs/defaultImg.PNG';

export default function TeamCard({
  name,
  image,
  major,
  email,
  twitter,
  linkedin,
  facebook,
  instagram,
}) {
  return (
    <div className="p-3 text-center">
      <img
        className="w-32 h-auto mx-auto border-4 border-red-400 border-solid rounded-full"
        src={image}
        alt="team member"
      />
      <div className="px-6">
        <div className="pt-6 font-sans text-lg font-bold text-gray-700">
          <h2>{name}</h2>
        </div>
        <div className="py-2 font-sans text-xs font-bold text-gray-600 ">
          <h3>{major}</h3>
        </div>
        <p className="pt-2 pb-4 text-xs text-gray-600">{email}</p>
      </div>
      <div className="pt-4 border-t">
        <a href={twitter} rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon
            className="mx-3 text-lg text-gray-600 hover:text-blue-500"
            icon={['fab', 'twitter']}
          />
        </a>
        <a href={linkedin} rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon
            className="mx-3 text-lg text-gray-600 hover:text-blue-600"
            icon={['fab', 'linkedin']}
          />
        </a>
        <a href={facebook} rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon
            className="mx-3 text-lg text-gray-600 hover:text-blue-700"
            icon={['fab', 'facebook']}
          />
        </a>
        <a href={instagram} rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon
            className="mx-3 text-lg text-gray-600 hover:text-red-700"
            icon={['fab', 'instagram']}
          />
        </a>
      </div>
    </div>
  );
}
TeamCard.propTypes = {
  image: PropType.string,
  name: PropType.string,
  major: PropType.string,
  email: PropType.string,
  twitter: PropType.string,
  linkedin: PropType.string,
  facebook: PropType.string,
  instagram: PropType.string,
};
TeamCard.defaultProps = {
  image: defaultImg,
  name: 'Member Name',
  major: 'Major',
  email: 'email.examlpe@gmail.com',
  twitter: 'https://twitter.com/',
  linkedin: 'https://www.linkedin.com/',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
};
