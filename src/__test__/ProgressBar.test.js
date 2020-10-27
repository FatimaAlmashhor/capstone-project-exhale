import React from 'react';
import renderer from 'react-test-renderer';
import Progress from '../../components/ProgressBar/ProgressBar';

it('renders correctly', () => {
  const tree = renderer
    .create(<Progress />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});