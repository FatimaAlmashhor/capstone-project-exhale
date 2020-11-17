/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Article from '../../components/ArticleCard';
import { articles } from '../../services/fakeArticleService';
import Loading from '../../components/Loading';

const Articles = () => {
  const [articlesCollection, setArticles] = useState(articles);
  const [search, setSearch] = useState('');

  const [moreLoaded, setLoadMore] = useState(false);

  const getArticles = () => {
    return articlesCollection.length !== 0 ? (
      <div className="flex flex-wrap -mb-4">
        {articlesCollection.map((article) => {
          return (
            <div className="lg:w-1/3 md:w-1/2 min-w-0" key={article.id}>
              <Article
                id={article.id}
                title={article.title}
                img={article.articleImg}
                paragraph={article.text.substring(1, 100)}
                time={article.date}
                articleLink={article.articleLink.replaceAll('/', '$')}
              />
            </div>
          );
        })}
      </div>
    ) : (
      <Loading />
    );
  };
  const geHeadArticle = () => {
    const headArt =
      search === ''
        ? articlesCollection[Math.floor(Math.random() * articlesCollection.length)]
        : null;

    return headArt ? (
      <Article
        id={headArt.id}
        title={headArt.title}
        img={headArt.articleImg}
        paragraph={headArt.text.substring(1, 100)}
        time={headArt.date}
        articleLink={headArt.articleLink.replaceAll('/', '$')}
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
    <div className="p-10">
      <div className="mt-6 text-center ">
        <h1 className="text-xl text-gray-600">Mental Health Articles & Advices</h1>
        <div className="flex box-content justify-center">
          <p className="font-mono w-2/4">
            Extreme emotions, attitudes, and behaviors involving weight and food is a
            kind of mental health problem. Read more about the causes, symptoms and
            how to get help.
          </p>
        </div>
        <div className="m-5 flex box-content justify-center">
          <div className="flex box-content justify-center bg-white rounded-full border border-black-600 w-2/5">
            <input
              className="rounded-l-full w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target)}
            />
            <div className="p-1">
              <button
                type="button"
                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
              >
                <FontAwesomeIcon
                  className="pt-1 text-lg text-white md:text-xl"
                  icon={faSearch}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full flex-grow">{geHeadArticle()}</div>
        <div className="w-full flex " />
        {getArticles()}
        <div>{moreLoaded ? getArticles() : ' '}</div>
        <div className="flex">
          <button
            type="button"
            onClick={() => {
              setLoadMore(!moreLoaded);
            }}
            className="bg-green-400 text-white px-2 mt-4 block rounded p-2 text-sm m-auto"
          >
            {moreLoaded ? 'show less' : 'show more'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
