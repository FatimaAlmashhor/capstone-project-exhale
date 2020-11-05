import React from 'react';
import TeamCard from '../../components/teamCard';

const About = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">About Us!</h2>
        <p className="font-mono">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ex
          placeat quia id consequuntur ullam, beatae minima sint consectetur natus
          illo praesentium voluptas maiores! Est ipsam autem eius velit quasi!
        </p>
      </div>
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
        <div className="mb-4 bg-gray-500 sm:w-1  md:w-1/3 ">
          <TeamCard />
        </div>
        <div className="mb-4 bg-gray-400 sm:w-1  md:w-1/3 ">
          <TeamCard />
        </div>
        <div className="mb-4 bg-gray-500 sm:w-1  md:w-1/3 ">
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default About;
