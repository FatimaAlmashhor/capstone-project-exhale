import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Button({ submit, height, width, color, hover, textColor }) {
  const [style, setStyle] = useState('');
  useEffect(() => {
    setStyle(
      `text-${textColor} bg-${color} hover:bg-${hover} border  hover:border-${color}  font-bold py-2 px-3 w-${width} h-${height} transition duration-500  ease-in-out rounded`
    );
  }, []);
  return (
    <div>
      <button type={submit ? 'submit' : 'button'} className={style}>
        Button
      </button>
    </div>
  );
}
Button.propTypes = {
  submit: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  hover: PropTypes.string.isRequired,
};
