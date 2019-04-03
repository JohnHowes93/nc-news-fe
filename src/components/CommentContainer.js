import React, { Component } from 'react';
import { commentDisplayer } from '../utils/CommentContainerUtils';
import CommentAdder from './CommentAdder';
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
    const { user, article_id } = this.props;
    let commentDisplay = <p>no comments to display</p>;
    let addComment = <p>log in to comment</p>;
    if (comments) {
      commentDisplay = commentDisplayer(comments);
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
