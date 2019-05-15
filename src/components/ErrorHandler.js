import React, { Component } from 'react';

class ErrorHandler extends Component {
  state = {};
  render() {
    console.log();
    return <div>{this.props.location.state.err}</div>;
  }
  componentDidMount() {
    console.log(this.props.location.state);
    // console.log(this.state);
  }
  componentDidUpdate() {
    console.log(this.props.location.state);
    // console.log(this.state);
  }
}

export default ErrorHandler;
