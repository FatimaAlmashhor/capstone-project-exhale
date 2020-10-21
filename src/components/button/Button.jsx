import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Button({ submit, height, width, color, hover, textColor }) {
  const [style, setStyle] = useState('');
  useEffect(() => {
    setStyle(
      `text-${textColor} 
       bg-${color} 
       hover:bg-${hover} 
       border  hover:border-${color}  
       font-bold py-2 px-3 w-${width} 
       h-${height} 
       transition duration-500  ease-in-out rounded`
    );
  }, []);
  return (
    <button type={submit ? 'submit' : 'button'} className={style}>
      Button
    </button>
  );
}
Button.propTypes = {
  submit: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  textColor: PropTypes.string,
  hover: PropTypes.string,
};

Button.defaultProps = {
  submit: false,
  height: 30,
  width: 40,
  color: 'mainPink',
  textColor: 'black',
  hover: 'transparent',
};
