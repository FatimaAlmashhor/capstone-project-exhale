/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import svg1 from '../../asset/svg/ProcessSvgs/1.svg';
import svg2 from '../../asset/svg/ProcessSvgs/2.svg';
import svg3 from '../../asset/svg/ProcessSvgs/3.svg';

const Cursol = () => {
  return (
    <Carousel autoPlay={2000} animationSpeed={1000} infinite>
      <img alt="dd" src={svg1} />
      <img alt="dd" src={svg2} />
      <img alt="dd" src={svg3} />
    </Carousel>
  );
};

export default Cursol;
