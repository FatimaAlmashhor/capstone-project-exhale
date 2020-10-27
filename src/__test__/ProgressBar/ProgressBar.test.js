import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

it('renders correctly', () => {
  const tree = renderer.create(<ProgressBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
