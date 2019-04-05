import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import ArticlesTable from './components/ArticlesTable';
import TopicsTable from './components/TopicsTable';
import ArticlesByTopicTable from './components/ArticlesByTopicTable';
import ViewArticle from './components/ViewArticle';
import PostNewArticle from './components/ArticleAdder';
import LoginForm from './components/LoginForm';
import ErrorHandler from './components/ErrorHandler';
import ViewUser from './components/ViewUser';

class App extends Component {
  state = {
    globalSearch: 'search articles, topics, users',
    user: null
  };
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="header">
          <span className="title">
            <Link to="/">nc news</Link>
          </span>
          <span className="articleAdd">
            {user ? (
              <Link to={`/articles/create`}>create a new post</Link>
            ) : (
              'log in to post, comment & vote'
            )}
          </span>
          <span className="login">
            {user ? (
              <Link to={`/users/${user}`}>{user}</Link>
            ) : (
              <LoginForm setUser={this.setUser} user={this.state.user} />
            )}
          </span>
        </div>
        <div className="main">
          <Router>
            <ArticlesTable path="/" />
            <ArticlesTable path="/articles" />
            <TopicsTable path="topics" />
            <ArticlesByTopicTable path="topics/:topic" />
            <ViewArticle path="articles/:article_id" user={user} />
            <PostNewArticle path="articles/create" user={user} />
            <ErrorHandler path="/error" />
            <ViewUser path="/users/:username" />
          </Router>
        </div>
      </div>
    );
  }
  handleChange = event => {
    this.setState({ globalSearch: event.target.value });
  };
  setUser = user => {
    this.setState({ user });
  };
}

export default App;
