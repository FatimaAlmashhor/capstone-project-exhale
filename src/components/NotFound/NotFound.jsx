import React from 'react';
import Lottie from 'react-lottie';
import unfound from '../../Lottie/404-animation.json';

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: unfound,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="w-full h-full ">
      <div className="container mx-auto w-2/5 my-20 ">
        <Lottie options={defaultOptions} height="auto" width="100%" />
      </div>
    </div>
  );
};

export default NotFound;
