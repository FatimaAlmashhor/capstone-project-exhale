import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../components/common/Modal';
import { BrowserRouter as Router}from 'react-router-dom'

it('renders correctly', () => {
  const Ex = <div>Example</div>
  const tree = renderer
    .create(<Router><Modal  /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});