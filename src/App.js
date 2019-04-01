import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NC News</h1>
        <form>
          <input
            type="text"
            name="globalsearch"
            value="search articles, topics, users"
          />
        </form>
        <h2> log in</h2>
      </div>
    );
  }
}

export default App;
