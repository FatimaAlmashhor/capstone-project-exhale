import 'jest-canvas-mock';
import React from 'react';
import 'react-router-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as  Router} from 'react-router-dom'
import Article  , {HorizontalArticleCard} from '../components/ArticleCard';
it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Article id={ 1 } title = {' '} paragraph = {' '} /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
it('renders correctly', () => {
  const tree = renderer
    .create(<Router><HorizontalArticleCard index={ 1 } title = {' '} paragraph = {' '}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})