import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../components/ArticleCard';
import {BrowserRouter} from 'react-router-dom'
it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Article index={3} title = {' '} paragraph = {' '} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})