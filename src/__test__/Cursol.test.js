import React from 'react';
import renderer from 'react-test-renderer';
import Cursol from '../components/Cursol/Cursol';
import Carousel from '@brainhubeu/react-carousel';

it('renders correctly', () => {
  const tree = renderer.create(<Cursol ><Carousel /> </Cursol>).toJSON();
  expect(tree).toMatchSnapshot();
});
