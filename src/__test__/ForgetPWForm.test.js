import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as  Router} from 'react-router-dom'
import ForgetPWForm from '../components/forgetPWForm';

it('renders correctly', () => {
  const tree = renderer.create(<Router><ForgetPWForm  /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
