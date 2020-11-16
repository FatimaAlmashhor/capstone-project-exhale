import React from 'react';
import renderer from 'react-test-renderer';
import Cursol from '../components/Cursol/Cursol';
it('renders correctly', () => {
  const tree = renderer.create(<Cursol />).toJSON();
  expect(tree).toMatchSnapshot();
});
