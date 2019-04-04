import React, { Component } from 'react';
import { voteOnArticle } from '../api';
import { navigate } from '@reach/router';
const { getArticleById } = require('../api');

class MainArticleContainer extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
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
  render() {
    const { article } = this.state;
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
        </div>
      </div>
    );
  }
}

export default MainArticleContainer;
