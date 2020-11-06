import React from 'react';
import renderer from 'react-test-renderer';
import SelfAssessment from '../containers/SelfAssessment'
import{ library } from '@fortawesome/fontawesome-svg-core';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons' ;
library.add(faChevronLeft);
it('renders correctly', () => {
  const tree = renderer
    .create(<SelfAssessment />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});