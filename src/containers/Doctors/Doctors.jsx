import React from 'react';
import FirstDoctorCard from '../../components/DoctorCard/FirstDoctorCard';
import RowHolder from '../../components/common/rowHolder/RowHolder';
import Image from '../../components/common/Image/Image';
import MainCloud from '../../asset/svg/MainCloud/MainCloud';

const Doctors = () => {
  return (
    <div className="p-10">
      <div className="mt-6 text-center ">
        <h1 className="text-xl text-gray-600">Our Psychiatrists</h1>
        <p className="mt-2 mb-8 text-gray-500">
          Need help but you don&sbquo;t know where to go? Or you&sbquo;re worried
          about someone you know - help is available. You&sbquo;re
          <br />
          not alone. Meet our experienced psychiatrists to seek the counsel you need.
        </p>
        {/* <div className="bg-blue-100">
          <Image width="1/2">
            <MainCloud />
          </Image>
        </div> */}
      </div>
      <FirstDoctorCard name="Dr. Mohammad Al-Khulaidi" specialty="Sleep Disorder" />
      <RowHolder num="5" />
      <RowHolder />
    </div>
  );
};
export default Doctors;
