import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, paragraph, time }) => {
  return (
    <section className="blog ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-5  md:mb-0 mb-6 flex flex-col justify-center items-center  mx-auto">
            <div className="  bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div className="header-content inline-flex">
                <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                  <div className="h-2 w-2 rounded-full m-1 bg-green-500" />
                </div>
                <div className="category-title flex-1 text-sm text-gray-400">
                  {time}
                </div>
              </div>
              <div className="title-post text-3xl">
                <h2 className="text-blue-500 ">{title}</h2>
              </div>
              <div className="summary-post text-base text-justify text-1xl ">
                <p>{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
Article.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  time: PropTypes.string,
};

Article.defaultProps = {
  time: new Date().toLocaleDateString('en-US'),
};
