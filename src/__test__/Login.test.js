import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../containers/Login';

it('renders correctly', () => {
    const fun = function (params) {
        // 
    }
    const foo= true;
  const tree = renderer.create(<Login show={foo} onClick={fun}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
