import React from 'react';
import renderer from 'react-test-renderer';
import { boolean } from 'yup';
import Modal , {Header , Body , Footer } from '../components/common/Modal';

describe('Modal test', () => {
    let fun = function () { };
  it('Modal component' , () => {
      let foo = false ;
    const tree = renderer
    .create(<Modal onClick={fun} show= {foo} >
            <div></div>
    </Modal>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });

  it('Modal Header ' , () => {
    const tree = renderer
    .create(<Header onClick ={fun} title ={' '} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });

  it('Modal Body ' , () => {
    const tree = renderer
    .create(<Body >
        <div></div>
    </Body>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });

  it('Modal Footer ' , () => {
    const tree = renderer
    .create(<Footer text = {' '} onClick = {fun}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });

});