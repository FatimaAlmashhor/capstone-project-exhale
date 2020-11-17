import React, { useState } from 'react';
import Article from '../../components/ArticleCard';
import { articles } from '../../services/fakeArticleService';

const Articles = () => {
  const [articlesCollection, setArticles] = useState(articles);
  const [search, setSearch] = useState('');

  const getArticles = () => {
    return articlesCollection.length !== 0 ? (
      <div className="flex flex-wrap -mb-4 mt-32">
        {articlesCollection.map((article) => {
          return (
            <div className="lg:w-1/3 md:w-1/2 min-w-0" key={article.id}>
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
    <div className="p-10 mt-32">
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
          <div className="flex box-content justify-center bg-white rounded-full w-2/4">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
              onChange={(e) => handleSearch(e.target)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full flex-grow">{geHeadArticle()}</div>
        <div className="w-full flex " />
        {getArticles()}
      </div>
    </div>
  );
};

export default Articles;
