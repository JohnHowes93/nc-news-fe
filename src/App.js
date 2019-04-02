import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import ArticlesTable from './components/ArticlesTable';
import TopicsTable from './components/TopicsTable';
import ArticlesByTopicTable from './components/ArticlesByTopicTable';
import ViewArticle from './components/ViewArticle';
import PostNewArticle from './components/ArticleAdder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1>NC News</h1>
        </Link>
        <form>
          <input
            type="text"
            name="globalsearch"
            value="search articles, topics, users"
          />
        </form>
        <h2> log in</h2>
        <Router>
          <ArticlesTable path="/" />
          <ArticlesTable path="/articles" />
          <TopicsTable path="topics" />
          <ArticlesByTopicTable path="topics/:topic" />
          <ViewArticle path="articles/:article_id" />
          <PostNewArticle path="articles/create" />
        </Router>
      </div>
    );
  }
}

export default App;
