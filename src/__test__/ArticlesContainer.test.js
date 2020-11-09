import React from 'react';
import renderer from 'react-test-renderer';
<<<<<<< HEAD
import {BrowserRouter as  Router} from 'react-router-dom'
=======
>>>>>>> ce4f57e4a5bdc9bbc54f84d5e1d62b4bc06220e0
import Articles from '../containers/Articles';

it('renders correctly', () => {
  const tree = renderer
<<<<<<< HEAD
    .create(<Router><Articles /></Router> )
=======
    .create(<Articles /> )
>>>>>>> ce4f57e4a5bdc9bbc54f84d5e1d62b4bc06220e0
    .toJSON();
  expect(tree).toMatchSnapshot();
});