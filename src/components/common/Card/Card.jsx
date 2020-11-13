import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children }) {
  return (
    <div className="w-auto rounded overflow-hidden border hover:shadow-lg">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
