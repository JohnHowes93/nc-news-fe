import React, { Component } from 'react';

class MainArticleContainer extends Component {
  state = {
    article: {
      author: 'jessjelly',
      title: 'Running a Node App',
      article_id: 1,
      topic: 'coding',
      created_at: '2016-08-18T12:07:52.389Z',
      votes: 0,
      body:
        'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
      comment_count: '8'
    }
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
      </div>
    );
  }
}

export default MainArticleContainer;
