import React from 'react';
import renderer from 'react-test-renderer';
import Articles from '../containers/Articles';
import {BrowserRouter} from 'react-router-dom'
it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Articles /></BrowserRouter> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});