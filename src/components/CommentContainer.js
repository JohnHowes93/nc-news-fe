import React, { Component } from 'react';
const { getCommentsById } = require('../api');

class CommentContainer extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    getCommentsById(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }
  render() {
    const { comments } = this.state;
    return comments.map(comment => {
      return (
        <div>
          <header>
            <h4>{comment.author}</h4>
            <h5> {comment.created_at}</h5>
            <h6>{comment.votes}</h6>
          </header>
          <article>{comment.body}</article>
        </div>
      );
    });
  }
}

export default CommentContainer;
