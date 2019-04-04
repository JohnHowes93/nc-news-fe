import React, { Component } from 'react';
import { voteOnArticle } from '../api';
import { navigate } from '@reach/router';
const { getArticleById, deleteArticle } = require('../api');

class MainArticleContainer extends Component {
  state = {
    article: {},
    user: ''
  };
  componentDidMount() {
    console.log(this.props);
    this.setState({ user: this.props.user });
    getArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => navigate('/error', { error: err }));
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
    return (
      <div>
        <header>
          <h2>{article.title}</h2>
          <h3>{article.topic}</h3>
          <h4>{article.author}</h4>
          <h5>{article.created_at}</h5>
        </header>
        <article>
          <p>{article.body}</p>
        </article>
        <div className="actions">
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
          <h4>{article.votes}</h4>

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
  }
}

export default MainArticleContainer;
