import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../containers/Login';

it('renders correctly', () => {
    const fun = function () {
       foo = false ;
    }
    let foo= true;
  const tree = renderer.create(<Login show={foo} onClick={fun}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
