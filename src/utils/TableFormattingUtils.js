import React from 'react';
import { Link } from '@reach/router';
const moment = require('moment');
moment().format();

export const formatArticleTable = article => {
  return article.map(article => {
    const title = (
      <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
    );
    const topic = <Link to={`/topics/${article.topic}`}>{article.topic}</Link>;
    const author = (
      <Link to={`/users/${article.author}`}>{article.author}</Link>
    );
    const comment_count = (
      <Link to={`/articles/${article.article_id}`}>
        {article.comment_count}
      </Link>
    );
    const created_at = (
      <Link to={`/articles/${article.article_id}`}>
        {moment(article.created_at).fromNow()}
      </Link>
    );
    return { title, topic, author, comment_count, created_at };
  });
};
