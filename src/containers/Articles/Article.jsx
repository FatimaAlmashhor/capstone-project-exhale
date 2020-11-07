import React from 'react';
import FullArticle from '../../components/FullArticle/Article';

const Article = (artId) => {
  return (
    <div>
      <FullArticle id={artId} />
    </div>
  );
};

export default Article;
