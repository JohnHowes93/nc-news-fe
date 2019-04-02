import React from 'react';

const MainArticleContainer = props => {
  return (
    <div>
      <header>
        <h2>{props.article.title}</h2>
        <h3>{props.article.topic}</h3>
        <h4>{props.article.author}</h4>
        <h5>{props.article.created_at}</h5>
      </header>
      <article>
        <p>{props.article.body}</p>
      </article>
    </div>
  );
};

export default MainArticleContainer;
