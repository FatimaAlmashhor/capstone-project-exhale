import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../components/ArticleCard';
it('renders correctly', () => {
  const tree = renderer
    .create(<Article header = {' '} paragraph = {' '}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});