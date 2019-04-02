import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from '@reach/router';
import MainArticleContainer from './MainArticleContainer';
import CommentContainer from './CommentContainer';

const ViewArticle = props => {
  console.log(props);
  return (
    <div>
      <MainArticleContainer article_id={props.article_id} />
      <CommentContainer comments={props.article_id} />
    </div>
  );
};

export default ViewArticle;
