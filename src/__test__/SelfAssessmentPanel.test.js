import React from 'react';
import renderer from 'react-test-renderer';
import SelfAssessmentPanel from '../components/SelfAssessmentPanle';

it('renders correctly', () => {
  let fun = function(){ }
  const tree = renderer
    .create(<SelfAssessmentPanel task = {' '} onClick = {fun}/> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});