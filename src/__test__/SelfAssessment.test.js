import React from 'react';
import renderer from 'react-test-renderer';
import SelfAssessment from '../containers/SelfAssessment';

it('renders correctly', () => {
  const tree = renderer
    .create(<SelfAssessment /> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});