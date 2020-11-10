import React from 'react';
import renderer from 'react-test-renderer';
import Doctors from '../containers/Doctors';

it('renders correctly', () => {
  const tree = renderer.create(<Doctors />).toJSON();
  expect(tree).toMatchSnapshot();
});