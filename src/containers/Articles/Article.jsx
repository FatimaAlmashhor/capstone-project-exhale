import React from 'react';
import FullArticle from '../../components/FullArticle/Article';

const Article = (artlink) => {
  return (
    <div>
      <FullArticle articleLink={artlink} />
    </div>
  );
};

export default Article;
