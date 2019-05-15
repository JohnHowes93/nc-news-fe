import React, { Component } from 'react';
import { voteOnArticle } from '../api';
import { navigate, Link } from '@reach/router';
import '../ViewArticle.css';

const moment = require('moment');
moment().format();

const { getArticleById, deleteArticle } = require('../api');

class MainArticleContainer extends Component {
  state = {
    article: {},
    user: '',
    thumbsUpSubmitted: false,
    thumbsDownSubmitted: false
  };
  componentDidMount() {
    this.setState({ user: this.props.user });
    getArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {
        console.log(err.response.data.msg);
        const errMessge = err.toString();
        navigate('/error', { state: { err: errMessge } });
      });
  }
  handleOnClick = event => {
    const postBody = {
      inc_votes: Number(event.currentTarget.value)
    };
    voteOnArticle(postBody, event.currentTarget.name).then(article => {
      this.setState({ article });
    });
  };
  handleDelete = () => {
    const { article_id } = this.state.article;
    const { user } = this.state;
    deleteArticle(article_id).then(article => {
      navigate(`/users/${user}`);
    });
  };
  render() {
    const { article, user } = this.state;
    let deleteArticleButton = <div />;
    if (article) {
      if (article.author === user)
        deleteArticleButton = (
          <div>
            <button
              type="button"
              value="1"
              name={article.article_id}
              onClick={this.handleDelete}
            >
              <span role="img" aria-label="delete">
                Delete This Article
              </span>
            </button>
          </div>
        );
    }
    if (article) {
      return (
        <div className="article">
          <header className="article-header">
            <span className="article-header-title">{article.title}</span>
            <span className="article-header-topic">
              <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
            </span>
            <span className="article-header-author">
              <Link to={`/users/${article.author}`}>{article.author}</Link>
            </span>
            <span className="article-header-created_at">
              Posted {moment(article.created_at).fromNow()}
            </span>
          </header>
          <article className="article-body">
            <p>{article.body}</p>
          </article>
          <div className="actions">
            {article.votes}{' '}
            <button
              type="button"
              value="1"
              name={article.article_id}
              onClick={this.handleOnClick}
            >
              <span role="img" aria-label="thumbs up">
                👍
              </span>
            </button>
            <button
              type="button"
              value="-1"
              name={article.article_id}
              onClick={this.handleOnClick}
            >
              <span role="img" aria-label="thumbs down">
                👎
              </span>
            </button>
            {deleteArticleButton}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default MainArticleContainer;
