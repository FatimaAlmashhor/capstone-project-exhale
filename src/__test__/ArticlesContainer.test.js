import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as  Router} from 'react-router-dom'
import Articles from '../containers/Articles';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Articles /></Router> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});