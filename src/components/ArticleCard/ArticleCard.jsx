import React from 'react';
import PropTypes from 'prop-types';

// import Button from '../common/Button' ;

export default function ArticleCard({ header, paragraph, time }) {
  return (
    <div className="max-w-screen-sm md:max-w-sm lg:max-w-sm rounded overflow-hidden ">
      <div className="px-6 pt-4 pb-2 text-gray-500">{time}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5">{header}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
      <div className="px-6 pt-3 pb-5 mt-10">
        {/* <Button text=''/> */}
        <button
          type="button"
          className=" border py-2 px-3 text-white hover:border-1 hover: border-green-400 hover:text-green-400 hover:bg-transparent rounded bg-green-400"
        >
          Read Full
        </button>
      </div>
    </div>
  );
}
ArticleCard.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  time: PropTypes.string,
};
ArticleCard.defaultProps = {
  time: new Date().toLocaleDateString('en-US'),
};
