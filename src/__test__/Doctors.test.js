import React from 'react';
import renderer from 'react-test-renderer';
import Doctors from '../containers/Doctors';
import {ThemeProvider} from '../themContext';

it('renders correctly', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  const tree = renderer.create(<ThemeProvider><Doctors /></ThemeProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});