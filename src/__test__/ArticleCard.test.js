import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../components/ArticleCard';

it('artical card', () => {
  const tree = renderer
    .create(<Card header = {' '} paragraph = {' '}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});