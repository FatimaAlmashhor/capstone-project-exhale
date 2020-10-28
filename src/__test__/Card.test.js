import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../components/common/Card';

it('renders correctly', () => {
  const Test = <div>Hello</div>
  const tree = renderer
    .create(<Card>{Test}</Card> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});