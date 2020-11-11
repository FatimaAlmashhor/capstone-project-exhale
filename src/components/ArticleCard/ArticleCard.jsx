import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Article from '../FullArticle/Article';

const ArticleCard = ({ id, title, paragraph, time, img }) => {
  const { url } = useRouteMatch();
  return (
    <section className="blog ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex flex-col items-center justify-center p-5 mx-auto mb-6 md:mb-0">
            {img && (
              <div
                className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md "
                style={{ backgroundImage: `url(${img}` }}
              />
            )}
            <div className="p-5 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg ">
              <div className="inline-flex header-content">
                <div className="flex-1 w-4 h-4 m-1 bg-green-100 rounded-full category-badge m">
                  <div className="w-2 h-2 m-1 bg-green-500 rounded-full" />
                </div>
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
                  className="block p-2 px-2 mt-4 text-sm text-white bg-green-400 rounded"
                >
                  <li key={id}>
                    <Link to={`${url}/${id}`}>read more</Link>
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
  time: '10/11/2020',
  img: ' ',
};
