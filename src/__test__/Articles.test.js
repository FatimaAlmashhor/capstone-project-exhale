import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as  Router} from 'react-router-dom'
import Articles from '../containers/Articles/Articles';

it('renders correctly', () => {
  const tree = renderer.create(<Articles />).toJSON();
  expect(tree).toMatchSnapshot();
});