import React from 'react';
import renderer from 'react-test-renderer';
import Signup from '../containers/Signup';
import {BrowserRouter} from 'react-router-dom' ;
it('renders correctly', () => {
  
    const fun = function () {
       foo = false ;
    }
    let foo= true;
  const tree = renderer.create(<BrowserRouter><Signup show={foo} onClick={fun}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
