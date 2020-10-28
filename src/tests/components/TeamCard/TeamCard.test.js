import React from 'react';
import renderer from 'react-test-renderer';
import TeamCard from '../../../components/teamCard';
import '../../../fontawesome';

it('renders correctly', () => {
  const tree = renderer.create(<TeamCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
