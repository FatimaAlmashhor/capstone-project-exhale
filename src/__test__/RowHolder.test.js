import React from 'react';
import renderer from 'react-test-renderer';
import RowHolder from '../components/common/rowHolder/RowHolder';

it('renders correctly', () => {
  const tree = renderer.create(<RowHolder />).toJSON();
  expect(tree).toMatchSnapshot();
});