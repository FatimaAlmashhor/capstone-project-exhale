import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ now, max, showLabel }) {
  return (
    <div>
      {showLabel && <p>{`${now}\\${max}`}</p>}
      <progress value={now} max={max} />
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
