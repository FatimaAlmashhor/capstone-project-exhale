/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, onClick, children }) => {
  return (
    <>
      {show ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={onClick}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
};

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export const Header = ({ onClick, title }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      {/* header */}
      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <button
          type="button"
          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={() => handleClick}
        >
          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>
    </>
  );
};
Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export const Body = ({ children }) => {
  return (
    <>
      {/* body */}
      <div className="relative p-6 flex-auto">{children}</div>
    </>
  );
};
Body.propTypes = {
  children: PropTypes.element.isRequired,
};
export const Footer = ({ onClick, text }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      {/* footer */}
      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={handleClick}
        >
          Close
        </button>
        <button
          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={handleClick}
        >
          {text}
        </button>
      </div>
    </>
  );
};
Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
