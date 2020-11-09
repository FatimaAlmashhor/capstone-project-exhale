import React from 'react';
import renderer from 'react-test-renderer';
<<<<<<< HEAD
import '../fontawesome';
import {BrowserRouter as  Router} from 'react-router-dom'
=======
>>>>>>> ce4f57e4a5bdc9bbc54f84d5e1d62b4bc06220e0
import Article from '../components/FullArticle';

it('renders correctly', () => {
  const tree = renderer
<<<<<<< HEAD
    .create(<Router><Article id = { 1 } /></Router>)
=======
    .create(<Article id = { 1 } />)
>>>>>>> ce4f57e4a5bdc9bbc54f84d5e1d62b4bc06220e0
    .toJSON();
  expect(tree).toMatchSnapshot();
})