import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropType from 'prop-types';
import defaultImg from '../../asset/images/default-image.PNG';
import { members } from '../../services/fakeTeamInfo';

export default function TeamCard({ id }) {
  return (
    <div className="p-4 text-center ">
      <img
        className="w-32 h-auto mx-auto border-4 border-green-500 border-solid rounded-full"
        src={defaultImg}
        alt="team member"
      />
      <div className="px-6">
        <div className="pt-6 font-sans text-lg font-bold text-gray-700">
          <h2>{members[id].name}</h2>
        </div>
        <div className="py-2 font-sans text-xs font-bold text-gray-600 ">
          <h3>{members[id].major}</h3>
        </div>
        <p className="pt-2 pb-4 text-xs text-gray-600">{members[id].email}</p>
      </div>
      <hr className="w-1/2 m-auto " />
      <div className="pt-4 ">
        <a href={members[id].twitter} rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon
            className="mx-3 text-lg text-gray-600 hover:text-blue-500"
            icon={['fab', 'twitter']}
          />
        </a>
        <a href={members[id].linkedin} rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon
            className="mx-3 text-lg text-gray-600 hover:text-blue-600"
            icon={['fab', 'linkedin']}
          />
        </a>
        <a href={members[id].facebook} rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon
            className="mx-3 text-lg text-gray-600 hover:text-blue-700"
            icon={['fab', 'facebook']}
          />
        </a>
        <a href={members[id].instagram} rel="noreferrer noopener" target="_blank">
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
  id: PropType.number,
};
TeamCard.defaultProps = {
  id: 1,
};
