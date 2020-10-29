import React from 'react';
import renderer from 'react-test-renderer';
import '../fontawesome';
import TeamCard from '../components/teamCard/TeamCard';

it('renders correctly', () => {
  const tree = renderer.create(<TeamCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
