import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const ArticleCard = ({ index, title, paragraph, time, img, authorImage }) => {
  return (
    <section className="blog w-full">
      <div className="container w-full px-5 py-24 mx-auto">
        <div className=" flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className=" m-auto flex flex-col lg:flex-row ">
            {img && (
              <div
                className="bg-gray-300 h-56 w-full flex w-auto lg:w-2/3 lg:h-auto rounded-lg shadow-md bg-cover bg-center content-center "
                style={{ backgroundImage: `url(${img}` }}
              />
            )}
            <Card>
              <div className="  bg-white -mt-10 m-auto rounded-lg overflow-hidden p-6">
                <div className="header-content ">
                  <div className="category-title mt-10 w-full  flex-1 text-sm text-gray-400">
                    {time}
                  </div>
                </div>
                <div className="title-post text-lg mt-5">
                  <h2 className="text-black ">{title}</h2>
                </div>
                <div className="summary-post text-base text-gray-500 pt-2 text-justify text-md ">
                  <p>{paragraph}</p>
                  <div className="mt-2">
                    <Link
                      to={`/articles/${index}`}
                      className="text-blue-400 hover:text-blue-900 text-sm transition duration-150 ease-in-out"
                    >
                      Read more
                      <svg
                        className="chev inline-block ml-1 w-2 h-2 stroke-2 stroke-current"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <g fillRule="evenodd">
                          <path d="M1 1l4 4-4 4" />
                        </g>
                      </svg>
                      <svg
                        className="arr hidden hover:inline-block ml-1 w-2 h-2 stroke-2 stroke-current"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <g fillRule="evenodd">
                          <path d="M0 5h7" />
                          <path d="M4 1l4 4-4 4" />
                        </g>
                      </svg>
                    </Link>
                    {authorImage && (
                      <div className="mt-6 flex flex-row items-center ">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={authorImage}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm leading-5 font-medium text-gray-900">
                            Joseph Dough
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
ArticleCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  time: PropTypes.string,
  img: PropTypes.string,
  authorImage: PropTypes.string,
};

ArticleCard.defaultProps = {
  time: new Date().toLocaleDateString('en-US'),
  img: ' ',
  authorImage: ' ',
};
