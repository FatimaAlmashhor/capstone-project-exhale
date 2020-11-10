import React from 'react';
import renderer from 'react-test-renderer';
import '../fontawesome';
<<<<<<< HEAD
import {BrowserRouter as  Router} from 'react-router-dom'
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 9afdc7a457514aa7e0f2f5ace7effbc446aeb882
import Article from '../components/FullArticle';

it('renders correctly', () => {
  const tree = renderer
<<<<<<< HEAD
    .create(<Router><Article id = { 1 } /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
=======
    .create(
      <Router>
        <Article id={1} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
>>>>>>> 9afdc7a457514aa7e0f2f5ace7effbc446aeb882
