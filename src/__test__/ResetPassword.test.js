import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as  Router} from 'react-router-dom'
import ResetPassword from '../components/resetPassword';

it('renders correctly', () => {
  const tree = renderer.create(<Router><ResetPassword  /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
