import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Article from '../FullArticle/Article';
import Card from '../common/Card';

const ArticleCard = ({ id, title, paragraph, time, img }) => {
  const { url } = useRouteMatch();
  return (
    <section className="blog ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-5  md:mb-0 mb-6 flex flex-col justify-center items-center  mx-auto">
            {img && (
              <div
                className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center "
                style={{ backgroundImage: `url(${img}` }}
              />
            )}
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

                <button
                  type="button"
                  className="bg-green-400 text-white px-2 mt-4 block rounded p-2 text-sm"
                >
                  <li key={id}>
                    <Link to={`${url}/${id}`}>{title}</Link>
                  </li>
                </button>
              </div>
            </div>
          </div>
          <Route path={`${url}/:Id`}>
            <Article id={id} />
          </Route>
        </div>
      </div>
    </section>
  );
};
export default ArticleCard;
ArticleCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  time: PropTypes.string,
  img: PropTypes.string,
};

ArticleCard.defaultProps = {
  time: new Date().toLocaleDateString('en-US'),
  img: ' ',
};

export const HorizontalArticleCard = ({
  index,
  title,
  paragraph,
  time,
  img,
  authorImage,
}) => {
  return (
    <section className="blog w-full  shadow-sm">
      <div className="container w-full px-5 py-24 mx-auto">
        <div className=" flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className=" m-auto flex flex-col lg:flex-row ">
            {img && (
              <div
                className="bg-gray-300 h-56 w-full flex w-auto lg:w-2/3 lg:h-auto shadow-sm bg-cover bg-center content-center "
                style={{ backgroundImage: `url(${img}` }}
              />
            )}
            <Card>
              <div className="  shadow-sm bg-white -mt-10 m-auto rounded-lg overflow-hidden p-6">
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
HorizontalArticleCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  time: PropTypes.string,
  img: PropTypes.string,
  authorImage: PropTypes.string,
};

HorizontalArticleCard.defaultProps = {
  time: new Date().toLocaleDateString('en-US'),
  img: ' ',
  authorImage: '',
};
