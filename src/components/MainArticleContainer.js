import React, { Component } from 'react';
const { getArticleById } = require('../api');

class MainArticleContainer extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
    getArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }
  render() {
    const { article } = this.state;
    console.log(article);
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
      </div>
    );
  }
}

export default MainArticleContainer;
