/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Article from '../../components/ArticleCard';
import articles from '../../services/fakeArticleService';
import Loading from '../../components/Loading';

const Articles = () => {
  const [artc, setstate] = useState(null);
  const [moreLoaded, setLoadMore] = useState(false);

  const getArticles = () => {
    articles.then((res) => {
      setstate(res);
    });
    if (artc == null)
      return (
        <div>
          <Loading />
          <div className="text-cente">
            <p>Loading articles please waite ...</p>
          </div>
        </div>
      );
    return (
      <div className="flex flex-wrap -mb-4">
        {artc.map((article) => {
          return (
            <div className="lg:w-1/3 md:w-1/2 sm:w-1 min-w-0">
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
    );
  };
  const geHeadArticle = () => {
    if (artc == null)
      return (
        <div>
          <Loading />
          <div className="text-cente">
            <p>Loading articles please waite ...</p>
          </div>
        </div>
      );
    const headArt = artc[Math.floor(Math.random() * artc.length)];
    return (
      <Article
        id={headArt.id}
        title={headArt.title}
        img={headArt.articleImg}
        paragraph={headArt.text.substring(1, 100)}
        time={headArt.date}
        articleLink={headArt.articleLink.replaceAll('/', '$')}
      />
    );
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
        <div>{moreLoaded ? getArticles() : ' '}</div>
      </div>
    </div>
  );
};

export default Articles;
