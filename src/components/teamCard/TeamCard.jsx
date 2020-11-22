import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropType from 'prop-types';
import defaultImg from '../../asset/images/default-image.PNG';

export default function TeamCard({
  name,
  image,
  major,
  email,
  twitter,
  linkedin,
  github,
  instagram,
}) {
  return (
    <div className="p-3 text-center ">
      <img
        className="w-32 h-auto mx-auto border-4 border-green-500 border-solid rounded-full"
        src={image}
        alt="team member"
      />
      <div className="px-6">
        <div className="pt-6 font-sans text-lg font-bold text-textColor-primary">
          <h2>{name}</h2>
        </div>
        <div className="py-2 font-sans text-xs font-bold text-gray-600 ">
          <h3>{major}</h3>
        </div>
        <p className="pt-2 pb-4 text-xs text-gray-600">{email}</p>
      </div>
      <hr className="w-1/2 m-auto " />
      <div className="pt-4 ">
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
        <a href={github} rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon
            className="mx-3 text-lg text-gray-600 hover:text-gray-900"
            icon={['fab', 'github']}
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
  github: PropType.string,
  instagram: PropType.string,
};
TeamCard.defaultProps = {
  image: defaultImg,
  name: 'Member Name',
  major: 'Major',
  email: 'email.examlpe@gmail.com',
  twitter: 'https://twitter.com/',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://www.github.com/',
  instagram: 'https://www.instagram.com/',
};
