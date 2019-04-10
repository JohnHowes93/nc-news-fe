import React, { Component } from 'react';
import CommentAdder from './CommentAdder';
import CommentDisplayer from './CommentDisplay';
import { getCommentsById } from '../api';

class CommentContainer extends Component {
  state = {
    comments: [],
    newComment: {}
  };
  render() {
    const { comments, newComment } = this.state;
    const { user, article_id } = this.props;
    let commentDisplay = <p>no comments to display</p>;
    let addComment = <p>log in to comment</p>;
    if (comments) {
      commentDisplay = (
        <CommentDisplayer
          article_id={article_id}
          user={user}
          newComment={newComment}
        />
      );
    }
    if (user) {
      addComment = (
        <CommentAdder
          user={user}
          article_id={article_id}
          comments={comments}
          handleAddComment={this.handleAddComment}
        />
      );
    }
    return (
      <div>
        <div>{commentDisplay}</div>
        <div> {addComment}</div>
      </div>
    );
  }
  handleAddComment = newComment => {
    this.setState({ newComment });
  };
}

export default CommentContainer;
