import React from 'react';
import renderer from 'react-test-renderer';
<<<<<<< HEAD
<<<<<<< HEAD
import Article from '../components/ArticleCard';
it('renders correctly', () => {
   let fun = function() {};
  const tree = renderer
    .create(<Article title = {' '} paragraph = {' '} onClick = {fun}/>)
=======
import Card from '../components/ArticleCard';

it('artical card', () => {
  const tree = renderer
    .create(<Card header = {' '} paragraph = {' '}/>)
>>>>>>> 39e4212... Feat : Add ArticalCard component
=======
import Article from '../components/ArticleCard';
it('renders correctly', () => {
  const tree = renderer
    .create(<Article header = {' '} paragraph = {' '}/>)
>>>>>>> b0662fe... Test : Edit ArticleCard
    .toJSON();
  expect(tree).toMatchSnapshot();
});