import React from 'react';
import renderer from 'react-test-renderer';
import Progress from '../../components/progressBar/ProgressBar';

it('renders correctly', () => {
  const tree = renderer
    .create(<Progress />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});