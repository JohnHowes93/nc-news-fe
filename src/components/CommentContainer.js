import React, { Component } from 'react';
import CommentAdder from './CommentAdder';
import CommentDisplayer from './CommentDisplay';

class CommentContainer extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    const { user, article_id } = this.props;
    let commentDisplay = <p>no comments to display</p>;
    let addComment = <p>log in to comment</p>;
    if (comments) {
      commentDisplay = <CommentDisplayer article_id={article_id} user={user} />;
    }
    if (user) {
      addComment = <CommentAdder user={user} article_id={article_id} />;
    }
    return (
      <div>
        <div>{commentDisplay}</div>
        <div> {addComment}</div>
      </div>
    );
  }
}

export default CommentContainer;
