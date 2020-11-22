import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as  Router} from 'react-router-dom'
import Articles from '../containers/Articles/Articles';
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
  const tree = renderer
    .create(
      <ThemeProvider><Router>
      <Articles />
    </Router></ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});