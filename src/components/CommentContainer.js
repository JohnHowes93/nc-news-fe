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
    let commentDisplay = <p>no comments to display</p>;
    if (comments) {
      commentDisplay = comments.map(comment => {
        return (
          <div key={comment.comment_id}>
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
    return <div>{commentDisplay}</div>;
  }
}

export default CommentContainer;
