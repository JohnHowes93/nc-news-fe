import React from 'react';
import 'react-table/react-table.css';
import MainArticleContainer from './MainArticleContainer';
import CommentContainer from './CommentContainer';

const ViewArticle = props => {
  console.log(props);
  return (
    <div>
      <MainArticleContainer article_id={props.article_id} />
      <CommentContainer article_id={props.article_id} />
    </div>
  );
};

export default ViewArticle;
