import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ now, max, showLabel }) {
  return (
    <div className="relative pt-1">
      {showLabel && <p>{`${now}\\${max}`}</p>}
      <div className="overflow-hidden  h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div
          style={{ width: `${7 * now}%` }}
          className="shadow-none  flex flex-col text-center whitespace-nowrap text-white justify-center  bg-yellow-500 transition-all duration-200"
        />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  now: PropTypes.number,
  max: PropTypes.number,
  showLabel: PropTypes.bool,
};

ProgressBar.defaultProps = {
  now: 0,
  max: 100,
  showLabel: false,
};
