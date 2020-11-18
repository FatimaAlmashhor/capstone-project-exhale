import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { articles } from '../../services/fakeArticleService';

const Article = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const article = articles.find((p) => p.id === Number(id));
  let articleData;

  if (article) {
    articleData = (
      <div>
        <section className="blog ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-5  md:mb-0 mb-6 flex flex-col justify-center items-center  mx-auto">
                {article.articleImg && (
                  <div
                    className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center "
                    style={{ backgroundImage: `url(${article.articleImg}` }}
                  />
                )}
                <div className="  bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                  <div className="header-content inline-flex">
                    <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                      <div className="h-2 w-2 rounded-full m-1 bg-green-500" />
                    </div>
                    <div className="category-title flex-1 text-sm text-gray-400">
                      {article.date}
                    </div>
                  </div>
                  <div className="title-post text-3xl">
                    <h2 className="text-blue-500 ">{article.title}</h2>
                  </div>
                  <div className="summary-post text-base text-justify text-1xl ">
                    <p>{article.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    articleData = <h2>{t('Sorry. Article does not exist')}</h2>;
  }

  return (
    <div>
      <div>{articleData}</div>
    </div>
  );
};

export default Article;
