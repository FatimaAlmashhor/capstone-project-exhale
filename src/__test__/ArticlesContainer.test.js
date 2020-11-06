import React from 'react';
import renderer from 'react-test-renderer';
import Articles from '../containers/Articles';

it('renders correctly', () => {
  const tree = renderer
    .create(<Articles /> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});