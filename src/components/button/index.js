import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ size, varient, type, disabled, text, style }) {
  const setSize =
    size === 'lg'
      ? ' px-8 py-1 sm:px-8 sm:py-1 md:px-10 md:py-2 lg:px-16 lg:py-3'
      : ' px-3 py-1 sm:px-4 sm:py-1 md:px-6  md:py-1 lg:px-8  lg:py-2';

  const setVarient = varient === 'primary' ? 'main-pink' : 'main-yellow';

  const setStyle =
    style === 'normal'
      ? ` ${setSize} bg-${setVarient} hover:bg-transparent  border-2  hover:text-${setVarient} border-${setVarient}`
      : ` ${setSize}  border-2 border-${setVarient} bg-transparent  text-${setVarient} hover:bg-${setVarient} hover:text-white `;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`${setStyle} transition duration-500  ease-in-out rounded`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  size: PropTypes.string,
  varient: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
};
Button.defaultProps = {
  disabled: false,
  size: 'lg',
  type: 'button',
  varient: 'primary',
  style: 'normal',
};
