import React from 'react';
import PropType from 'prop-types';
import Card from '../Card/Card';
import DoctorCard from '../../DoctorCard/DoctorCard';
import { doctors } from '../../../services/fakeDoctorsServices';

export default function RowHolder({ num, mainPage }) {
  function getNthRow(n) {
    const newDoctors = doctors.slice(n - 1, n + 2);
    return newDoctors.map((doc) => (
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
    ));
  }
  return (
    <div className="grid justify-center gap-8 mb-20 justify-items-center lg:grid-cols-3 md:grid-cols-2">
      {mainPage ? getNthRow(1) : getNthRow(num)}
    </div>
  );
}
RowHolder.propTypes = {
  num: PropType.number,
  mainPage: PropType.bool,
};
RowHolder.defaultProps = {
  num: 1,
  mainPage: false,
};
