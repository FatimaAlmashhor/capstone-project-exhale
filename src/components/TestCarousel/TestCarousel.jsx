import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React from 'react';
import Step1 from '../../asset/svg/TestProcess/Step1/Step1';
import Step2 from '../../asset/svg/TestProcess/Step2/Step2';
import Step3 from '../../asset/svg/TestProcess/Step3/Step3';

export default function TestCarousel() {
  return (
    <div>
      <Carousel plugins={['arrows']}>
        <Step1 />
        <Step2 />
        <Step3 />
      </Carousel>
    </div>
  );
}
