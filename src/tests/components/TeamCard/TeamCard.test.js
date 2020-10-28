import React from 'react';
import renderer from 'react-test-renderer';
import TeamCard from '../../../components/TeamCard';
import '../../../fontawesome';

it('renders correctly', () => {
  const tree = renderer.create(<TeamCard />).toJSON();
  expect.addSnapshotSerializer(require('jest-snapshot-serializer-ansi'));
  expect(tree).toMatchSnapshot();
});
