import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import ArticlesTable from './components/ArticlesTable';
import TopicsTable from './components/TopicsTable';
import ArticlesByTopicTable from './components/ArticlesByTopicTable';
import ViewArticle from './components/ViewArticle';
import PostNewArticle from './components/ArticleAdder';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    globalSearch: 'search articles, topics, users',
    user: null
  };
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Link to="/">
          <h1>NC News</h1>
        </Link>

        <form>
          <input
            type="text"
            name="globalsearch"
            value={this.state.globalSearch}
            onChange={this.handleChange}
          />
        </form>
        <h2>
          {user ? (
            <Link to={`/articles/create`}>create a new post</Link>
          ) : (
            <p>log in to post, comment & vote</p>
          )}
        </h2>
        <h2>
          {user ? (
            <Link to={`/users/${user}`}>{user}</Link>
          ) : (
            <LoginForm setUser={this.setUser} user={this.state.user} />
          )}
        </h2>

        <Router>
          <ArticlesTable path="/" />
          <ArticlesTable path="/articles" />
          <TopicsTable path="topics" />
          <ArticlesByTopicTable path="topics/:topic" />
          <ViewArticle path="articles/:article_id" user={user} />
          <PostNewArticle path="articles/create" user={user} />
        </Router>
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
