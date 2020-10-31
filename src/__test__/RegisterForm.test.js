import React from 'react';
import renderer from 'react-test-renderer';
import '../fontawesome';
import RegisterForm from '../components/RegisterForm';

it('renders correctly', () => {
  const tree = renderer.create(<RegisterForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
