import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../components/ArticleCard';

it('renders correctly', () => {
   let fun = function() {};
  const tree = renderer
    .create(<Article title = {' '} paragraph = {' '} onClick = {fun}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})