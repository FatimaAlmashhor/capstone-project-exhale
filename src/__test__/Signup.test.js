import React from 'react';
import renderer from 'react-test-renderer';
import Signup from '../containers/Signup';
it('renders correctly', () => {
  const Ex = <div>Example</div>
  const tree = renderer
    .create(<Signup  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});