import React from 'react';
import FirstDoctorCard from '../../components/DoctorCard/FirstDoctorCard';
import RowHolder from '../../components/common/rowHolder/RowHolder';

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
      </div>
      <FirstDoctorCard name="Dr. Mohammad Al-Khulaidi" specialty="Sleep Disorder" />
      <RowHolder num={1} />
      <RowHolder num={4} />
      <RowHolder num={7} />
    </div>
  );
};
export default Doctors;
