import React from 'react';
import 'react-table/react-table.css';
import MainArticleContainer from './MainArticleContainer';
import '../ViewArticle.css';

import CommentContainer from './CommentContainer';

const ViewArticle = props => {
  const { article_id, user } = props;
  return (
    <div>
      <MainArticleContainer article_id={article_id} user={user} />
      <CommentContainer article_id={article_id} user={user} />
    </div>
  );
};

export default ViewArticle;
