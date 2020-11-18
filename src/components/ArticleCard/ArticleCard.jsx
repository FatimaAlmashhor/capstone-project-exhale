import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Article from '../FullArticle/Article';
import Card from '../common/Card';

const ArticleCard = ({ id, title, paragraph, time, img }) => {
  const { url } = useRouteMatch();
  const { t } = useTranslation();

  return (
    <section className="blog ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex flex-col items-center justify-center p-5 mx-auto mb-6 md:mb-0">
            {img && (
              <div
                className="w-full h-56 bg-gray-300 bg-center bg-cover shadow-md "
                style={{ backgroundImage: `url(${img}` }}
              />
            )}
            <div className="p-5 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg ">
              <div className="inline-flex header-content">
                <div className="flex-1 text-sm text-gray-400 category-title">
                  {time}
                </div>
              </div>
              <div className="text-3xl title-post">
                <h2 className="text-blue-500 ">{title}</h2>
              </div>
              <div className="text-base text-justify summary-post text-1xl ">
                <p>{paragraph}</p>

                <button
                  type="button"
                  className="block p-2 px-2 mt-4 text-sm text-white bg-green-400 rounded hover:bg-green-300"
                >
                  <li className="list-none" key={id}>
                    <Link to={`${url}/${id}`}>{t('Read More')}</Link>
                  </li>
                </button>
              </div>
            </div>
          </div>
          <Route path={`${url}/:id`}>
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
    <section className="w-full bg-transparent blog">
      <div className="container w-full px-5 py-24 mx-auto">
        <div className="flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 hover:shadow-lg">
          <div className="flex flex-col m-auto lg:flex-row">
            {img && (
              <div
                className="flex content-center w-full h-56 bg-gray-300 bg-center bg-cover shadow-sm lg:w-2/3 lg:h-auto "
                style={{ backgroundImage: `url(${img}` }}
              />
            )}
            <Card>
              <div className="p-6 m-auto -mt-10 overflow-hidden bg-white rounded-lg shadow-sm ">
                <div className="header-content ">
                  <div className="flex-1 w-full mt-10 text-sm text-gray-400 category-title">
                    {time}
                  </div>
                </div>
                <div className="mt-5 text-lg title-post">
                  <h2 className="text-black ">{title}</h2>
                </div>
                <div className="pt-2 text-base text-justify text-gray-500 summary-post text-md ">
                  <p>{paragraph}</p>
                  <div className="mt-2">
                    <Link
                      to={`/articles/${index}`}
                      className="text-sm text-blue-400 transition duration-150 ease-in-out hover:text-blue-900"
                    >
                      Read more
                      <svg
                        className="inline-block w-2 h-2 ml-1 stroke-current stroke-2 chev"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <g fillRule="evenodd">
                          <path d="M1 1l4 4-4 4" />
                        </g>
                      </svg>
                      <svg
                        className="hidden w-2 h-2 ml-1 stroke-current stroke-2 arr hover:inline-block"
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
                      <div className="flex flex-row items-center mt-6 ">
                        <div className="flex-shrink-0">
                          <img
                            className="object-cover w-10 h-10 rounded-full"
                            src={authorImage}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium leading-5 text-gray-900">
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
