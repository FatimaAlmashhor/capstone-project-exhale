import React from 'react';
import renderer from 'react-test-renderer';
import Footer  from '../components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import {BrowserRouter as Router} from 'react-router-dom'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faFacebook, faLinkedin, faInstagram);

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Footer /></Router> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});