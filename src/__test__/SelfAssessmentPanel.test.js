import React from 'react';
import renderer from 'react-test-renderer';
import SelfAssessmentPanel from '../components/SelfAssessmentPanle';

it('renders correctly', () => {
  const tree = renderer
    .create(<SelfAssessmentPanel /> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});