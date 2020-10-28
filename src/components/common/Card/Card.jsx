import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children }) {
  return (
    <div className="max-w-screen-sm md:max-w-xs lg:max-w-xs rounded overflow-hidden border hover:shadow-md">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
