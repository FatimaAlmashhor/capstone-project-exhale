/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, onClick, children }) => {
  return (
    <>
      {show ? (
        <>
          <div
            className="fixed top-0 right-0 left-0  mt-5 lg:inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            onClick={onClick}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative  md:w-7/12"
            >
              {/* content */}
              <div className="relative flex flex-col w-auto bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {children}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
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
  return (
    <>
      {/* header */}
      <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <button
          type="button"
          className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
          onClick={onClick}
        >
          <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
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
      <div className="relative flex-auto p-6">{children}</div>
    </>
  );
};
Body.propTypes = {
  children: PropTypes.element.isRequired,
};
export const Footer = ({ onClick, text }) => {
  return (
    <>
      {/* footer */}
      <div className="flex items-center justify-end p-6 border-t border-gray-300 border-solid rounded-b">
        <button
          className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={onClick}
        >
          Close
        </button>
        <button
          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={onClick}
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
