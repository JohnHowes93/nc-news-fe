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
import { ReactTableDefaults } from 'react-table';
import ArticleAdder from './components/ArticleAdder';

Object.assign(ReactTableDefaults, {
  defaultPageSize: 20,
  showPageSizeOptions: false,
  showPaginationBottom: false,
  sortable: false,
  showPageJump: false
});

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
              <div>
                <Link to={`/users/${user}`}>Logged in as {user}</Link>{' '}
                <button onClick={this.handleLogOut}>Log Out </button>
              </div>
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
            <ArticleAdder path="/articles/create" user={user} />
          </Router>
          <div className="readme">
            <Link to="https://github.com/JohnHowes93/nc-news-fe">
              github/readme
            </Link>
          </div>
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
  handleLogOut = () => {
    this.setState({ user: null });
  };
}

export default App;
