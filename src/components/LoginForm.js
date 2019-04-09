import React, { Component, Fragment } from 'react';
import { getUserByUsername } from '../api';

class LoginForm extends Component {
  state = {
    username: 'tickle122',
    usernameDoesNotExist: <div />
  };
  render() {
    const { username, usernameDoesNotExist } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleExistingUserSubmit}>
          <input
            name="username"
            onChange={this.handleExistingUserChange}
            value={username}
            className="loginTextBox"
          />
          <input type="submit" value="login" />
          {usernameDoesNotExist}
        </form>
      </Fragment>
    );
  }
  handleExistingUserSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    const { setUser } = this.props;
    getUserByUsername(username).then(res => {
      if (res) {
        setUser(username);
      } else {
        this.setState({ usernameDoesNotExist: <p>username not found</p> });
      }
    });
  };
  handleExistingUserChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

export default LoginForm;
