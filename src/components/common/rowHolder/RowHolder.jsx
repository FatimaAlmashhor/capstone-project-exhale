import React from 'react';
import PropType from 'prop-types';
import Card from '../Card/Card';
import DoctorCard from '../../DoctorCard/DoctorCard';
import { getNthRow } from '../../../services/fakeDoctorsServices';

export default function RowHolder({ num }) {
  return (
    <div className="grid justify-center gap-8 mb-20 justify-items-center lg:grid-cols-3 md:grid-cols-2">
      {getNthRow(num).map((doc) => (
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
      ))}
    </div>
  );
}
RowHolder.propTypes = {
  num: PropType.string,
};
RowHolder.defaultProps = {
  num: '3',
};
