import React from 'react';
import PropTypes from 'prop-types';

export default function Circle({ color }) {
  return (
    <div>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 421 443"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="199.5" cy="221.5" r="221.5" fill={color} />
      </svg>
    </div>
  );
}

Circle.defaultProps = {
  color: '#99E1E5',
};
Circle.propTypes = {
  color: PropTypes.string,
};
