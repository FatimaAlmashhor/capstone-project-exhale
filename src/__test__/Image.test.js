import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../components/common/Image';
it('renders correctly', () => {
  const Ex = <div>Example</div>
  const tree = renderer
    .create(<Image width = {' '}>{Ex}</Image>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});