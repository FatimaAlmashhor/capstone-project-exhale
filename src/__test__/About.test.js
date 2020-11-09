import React from 'react';
import renderer from 'react-test-renderer';
import '../fontawesome';
import About from '../containers/About/About';


it('renders correctly', () => {
  const Test = <div>Hello</div>
  const tree = renderer
    .create(<About>{Test}</About> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});