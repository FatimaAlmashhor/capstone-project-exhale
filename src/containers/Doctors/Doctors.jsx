import React from 'react';
import Card from '../../components/common/Card/Card';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import FirstDoctorCard from '../../components/DoctorCard/FirstDoctorCard';
import { doctors } from '../../services/fakeDoctorsServices';

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
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap m-4">
          {doctors.map((doc) => (
            <div className="p-4 md:w-1/2 lg:w-1/3" key={doc.id}>
              <Card>
                <DoctorCard
                  name={`${doc.id}. ${doc.name}`}
                  specialty={doc.specialty}
                  workplace={doc.workplace}
                  address={doc.address}
                  email={doc.email}
                  phone={doc.phone}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Doctors;
