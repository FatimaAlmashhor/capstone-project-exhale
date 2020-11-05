import React from 'react';
import renderer from 'react-test-renderer';
import SocialButtons from '../components/SocialButtons';

it('renders correctly', () => {
  const tree = renderer
    .create(<SocialButtons /> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});