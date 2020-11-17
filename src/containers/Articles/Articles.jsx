import React from 'react';
import { useTranslation } from 'react-i18next';
import Article from '../../components/ArticleCard';
import { articles } from '../../services/fakeArticleService';

const articlesDives = () => {
  return (
    <div className="flex flex-wrap -mb-4">
      {articles.map((article) => {
        return (
          <div className="w-1/3" key={article.id}>
            <Article
              id={article.id}
              title={article.title}
              img={article.articleImg}
              paragraph={article.text.substring(1, 100)}
              time={article.date}
            />
          </div>
        );
      })}
    </div>
  );
};
const Articles = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          {t('articles')}
        </h1>
        <div className="flex box-content justify-center">
          <p className="font-mono w-2/4">{t('articlesDetsils')}</p>
        </div>
        <div className="flex box-content justify-center">
          <div className="flex box-content justify-center bg-white rounded-full shadow-xl w-2/5">
            <input
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder={t('Search')}
            />
            <div className="p-4">
              <button
                type="button"
                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
              >
                icon
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full flex-grow">
          <Article
            id={99}
            title={t('articletitle')}
            img="https://cdn.shopify.com/s/files/1/0100/4430/9570/articles/Coming_Out_About_Mental_Health_On_Social_Media.jpg?v=1567939851"
            paragraph={t('articlepragraph')}
          />
        </div>
        <div className="w-full flex " />
        {articlesDives()}
      </div>
    </div>
  );
};

export default Articles;
