import 'jest-canvas-mock';
import React from 'react';
import renderer from 'react-test-renderer';
import '../fontawesome';
import About from '../containers/About/About';

it('renders correctly', () => {
  const tree = renderer
    .create(<About/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});