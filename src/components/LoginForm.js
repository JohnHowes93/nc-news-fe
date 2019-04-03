import React, { Component, Fragment } from 'react';

class LoginForm extends Component {
  state = {
    username: 'tickle122',
    newUsername: 'enter a new username',
    usernameExists: 0
  };
  render() {
    const { username, newUsername, usernameExists } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.handleExistingUserSubmit}>
          <p>existing user</p>{' '}
          <input
            name="username"
            onChange={this.handleExistingUserChange}
            value={username}
          />
          <input type="submit" value="login" />
        </form>
        <form onSubmit={this.handleNewUserSubmit}>
          <p>new user</p>{' '}
          <input
            name="newUsername"
            onChange={this.handleNewUserChange}
            value={newUsername}
          />
          <input type="submit" value="register" />
        </form>
      </Fragment>
    );
  }
  handleExistingUserSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    const { setUser } = this.props;
    setUser(username);
  };
  handleExistingUserChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleNewUserSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    const { setUser } = this.props;
  };
  handleNewUserChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

export default LoginForm;
