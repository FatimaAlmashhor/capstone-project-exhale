import React from 'react';
import TeamCard from '../../components/teamCard';

const Contact = () => {
  return (
    <div>
      <div className="md:flex md:flex-wrap -mb-4">
        <div className="mb-4 bg-gray-400 sm:w-1  md:w-1/3 ">
          <TeamCard />
        </div>
        <div className="mb-4 bg-gray-500 sm:w-1  md:w-1/3 ">
          <TeamCard />
        </div>
        <div className="mb-4 bg-gray-400 sm:w-1  md:w-1/3 ">
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
