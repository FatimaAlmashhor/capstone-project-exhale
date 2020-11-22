import React from 'react';
import FullArticle from '../../components/FullArticle/Article';

const Article = (artId) => {
  return (
    <div className="bg-background-secondary">
      <FullArticle id={artId} />
    </div>
  );
};

export default Article;
