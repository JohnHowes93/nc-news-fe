import React, { Component } from 'react';
import { voteOnComment, getCommentsById, deleteComment } from '../api';
import { navigate } from '@reach/router/lib/history';

class CommentDisplayer extends Component {
  state = {
    user: '',
    comments: [],
    comment: {}
  };
  render() {
    const { comments, user } = this.state;
    console.log('user', user);
    let deleteCommentButton = <div />;
    if (comments)
      return comments.map(comment => {
        if (comment.author === user)
          deleteCommentButton = (
            <div>
              <button
                type="button"
                onClick={this.handleDelete}
                value={comment.comment_id}
              >
                Delete This Comment
              </button>
            </div>
          );
        return (
          <div key={comment.comment_id}>
            <header>
              <h4>{comment.author}</h4>
              <h5> {comment.created_at}</h5>
            </header>
            <article>{comment.body}</article>
            <div className="actions">
              <button
                type="button"
                value="1"
                name={comment.comment_id}
                onClick={this.handleOnClick}
              >
                <span role="img" aria-label="thumbs up">
                  👍
                </span>
              </button>
              <h6>{comment.votes}</h6>
              <button
                type="button"
                value="-1"
                name={comment.comment_id}
                onClick={this.handleOnClick}
              >
                <span role="img" aria-label="thumbs down">
                  👎
                </span>
              </button>
            </div>
            {deleteCommentButton}
          </div>
        );
      });
    else return <div />;
  }
  componentDidMount() {
    this.setState({ user: this.props.user });
    getCommentsById(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      getCommentsById(this.props.article_id).then(comments => {
        this.setState({ comments });
      });
    }
  }

  handleOnClick = event => {
    const postBody = {
      inc_votes: Number(event.currentTarget.value)
    };
    voteOnComment(postBody, event.currentTarget.name).then(votes => {
      this.setState({ votes });
    });
  };
  handleDelete = e => {
    deleteComment(e.target.value).then(() => {
      navigate(`/articles/${this.props.article_id}`);
    });
  };
}

export default CommentDisplayer;
