import React, { Component } from 'react';
import { voteOnComment, getCommentsById, deleteComment } from '../api';
import { navigate } from '@reach/router/lib/history';
import '../Comments.css';
import { Link } from '@reach/router';
const moment = require('moment');
moment().format();

class CommentDisplayer extends Component {
  state = {
    user: '',
    comments: [],
    comment: {}
  };
  render() {
    const { comments, user } = this.state;
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
          <div key={comment.comment_id} className="single-comment">
            <div className="comment-header">
              <span className="comment-created_at">
                Posted {moment(comment.created_at).fromNow()}
              </span>
              <span />
              <span className="comment-author">
                <Link to={`/users/${comment.author}`}>{comment.author}</Link>
              </span>
            </div>
            <article className="comment-body">{comment.body}</article>
            <div className="actions">
              {comment.votes}{' '}
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
