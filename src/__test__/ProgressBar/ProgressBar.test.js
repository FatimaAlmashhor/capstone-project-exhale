import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './../../components/progressBar/ProgressBar';

it('renders correctly', () => {
  const tree = renderer.create(<ProgressBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
