import React, { Component } from 'react';

class ErrorHandler extends Component {
  state = {
    error: {
      msg: 'error'
    }
  };
  render() {
    return (
      <div>
        <p>{this.state.error.msg}</p>
      </div>
    );
  }
}

export default ErrorHandler;
