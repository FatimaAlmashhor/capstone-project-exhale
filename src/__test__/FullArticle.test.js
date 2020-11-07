import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../components/FullArticle';

it('renders correctly', () => {
  const tree = renderer
    .create(<Article id = { 1 } />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})