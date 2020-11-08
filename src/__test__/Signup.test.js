import React from 'react';
import renderer from 'react-test-renderer';
import Signup from '../containers/Signup';

it('renders correctly', () => {
    const fun = function (params) {
        // 
    }
    const foo= true;
  const tree = renderer.create(<Signup show={foo} onClick={fun}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
