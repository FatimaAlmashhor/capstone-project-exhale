import React from 'react';
import renderer from 'react-test-renderer';
import FirstDoctorCard from '../components/DoctorCard/FirstDoctorCard';

it('renders correctly', () => {
  const tree = renderer
    .create(<FirstDoctorCard name={' '} specialty= {' '} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});