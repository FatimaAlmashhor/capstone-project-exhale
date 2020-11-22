import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Article from '../../components/ArticleCard';
import { articles } from '../../services/fakeArticleService';
import { ThemeContext } from '../../themContext';

const Articles = () => {
  const { t } = useTranslation();
  const { theme } = React.useContext(ThemeContext);
  const [articlesCollection, setArticles] = useState(articles);
  const [search, setSearch] = useState('');

  const getArticles = () => {
    return articlesCollection.length !== 0 ? (
      <div className="flex flex-wrap mt-10 -mb-4">
        {articlesCollection.map((article) => {
          return (
            <div className="min-w-0 lg:w-1/3 md:w-1/2" key={article.id}>
              <Article
                id={article.id}
                title={article.title}
                img={article.articleImg}
                paragraph={article.text.substring(1, 100)}
                time={article.date}
                articleLink={article.articleLink.replace('///g', '$')}
              />
            </div>
          );
        })}
      </div>
    ) : null;
  };
  const geHeadArticle = () => {
    const headArt = search === '' ? articlesCollection[0] : null;

    return headArt ? (
      <Article
        id={headArt.id}
        title={headArt.title}
        img={headArt.articleImg}
        paragraph={headArt.text.substring(1, 100)}
        time={headArt.date}
        articleLink={headArt.articleLink.replace('///g', '$')}
      />
    ) : (
      <div />
    );
  };
  const filterArticle = (ser) => {
    let feltered = articlesCollection;
    if (ser !== '') {
      feltered = articlesCollection.filter((m) =>
        m.title.toString().toUpperCase().startsWith(ser.toString().toUpperCase())
      );
      setArticles(feltered);
    } else setArticles(articles);
  };
  const handleSearch = (ser) => {
    setSearch(ser.value);
    filterArticle(ser.value);
  };
  return (
    <div className=" bg-background-primary">
      <div className="Header flex-grow  w-full h-64 top-0 py-64 bg-background-pinck">
        <svg
          className="absolute buttom-0 h-64 w-full "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            fill={theme === 'dark' ? '#0d2438' : 'white'}
            points="0,100 100,0 100,100"
          />
        </svg>
      </div>
      <div className="pt-56 pb-12 text-center absolute top-0 right-0 left-0">
        <h1 className="text-4xl font-semibold text-blue-700">
          {t('Mental Health Articles & Advices')}
        </h1>
        <div className="box-content flex justify-center mt-4 mb-8 text-lg leading-relaxed text-gray-600">
          <p className="w-2/4 ">{t('Articles paragraph')}</p>
        </div>
        <div className="box-content flex justify-center m-5">
          <div className="box-content flex justify-center w-4/5 md:w-3/5 bg-white rounded-full">
            <input
              type="text"
              name="search"
              placeholder={t('Search')}
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
              onChange={(e) => handleSearch(e.target)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col  px-2 md:px-12 lg:px-32 justify-center  w-full ">
        <div className="flex-grow mt-64 md:mt-20 w-full wx-auto justify-center">
          {geHeadArticle()}
        </div>
        <div className="flex w-full justify-center " />
        {getArticles()}
      </div>
    </div>
  );
};

export default Articles;
