import React, { Component, Fragment } from 'react';

class LoginForm extends Component {
  state = {
    username: 'tickle122'
    // usernameExists: 0
  };
  render() {
    const { username } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleExistingUserSubmit}>
          <input
            name="username"
            onChange={this.handleExistingUserChange}
            value={username}
          />
          <input type="submit" value="login" />
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
  };
  handleNewUserChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

export default LoginForm;
