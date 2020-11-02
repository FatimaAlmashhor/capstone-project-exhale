import React from 'react';
import renderer from 'react-test-renderer';
import ContactUsForm from '../components/ContactUsForm';

it('renders correctly', () => {
  const tree = renderer.create(<ContactUsForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
