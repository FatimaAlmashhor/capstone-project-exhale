import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ done }) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      transition: '1s',
    };
    setStyle(newStyle);
  }, 1000);
  return (
    <div>
      <div className="h-3 relative max-w-xl rounded-full overflow-hidden m-auto">
        <div className="w-full h-full bg-red-300 absolute" />
        <div className="h-full bg-blue-400 absolute" style={style} />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  done: PropTypes.number,
};

ProgressBar.defaultProps = {
  done: 0,
};
