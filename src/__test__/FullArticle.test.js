import React from 'react';
import renderer from 'react-test-renderer';
import '../fontawesome';
import {BrowserRouter as  Router} from 'react-router-dom'
import Article from '../components/FullArticle';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Article id = { 1 } /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})