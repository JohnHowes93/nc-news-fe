import React, { Component } from 'react';
import { voteOnComment, getCommentsById, deleteComment } from '../api';
import { navigate } from '@reach/router/lib/history';
import '../Comments.css';
import { Link } from '@reach/router';
const moment = require('moment');
moment().format();

class CommentDisplayer extends Component {
  state = {
    user: null,
    comments: []
  };
  render() {
    const { comments, user } = this.state;
    const shouldVotesBeDisabled = () => {
      if (user === null) return true;
      else return false;
    };
    let deleteCommentButton = <div />;
    if (comments)
      return comments.map(comment => {
        if (comment) {
          if (comment.author === user) {
            deleteCommentButton = (
              <div>
                <button
                  type="button"
                  onClick={() => this.handleDelete(comment)}
                  value={comment.comment_id}
                >
                  Delete This Comment
                </button>
              </div>
            );
          }
        } else deleteCommentButton = <div />;
        if (comment) {
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
                  onClick={() => this.handleThumbsUpOnClick(comment)}
                  disabled={shouldVotesBeDisabled()}
                >
                  <span role="img" aria-label="thumbs up">
                    👍
                  </span>
                </button>
                <button
                  type="button"
                  value="-1"
                  name={comment.comment_id}
                  onClick={() => this.handleThumbsDownOnClick(comment)}
                  disabled={shouldVotesBeDisabled()}
                >
                  <span role="img" aria-label="thumbs down">
                    👎
                  </span>
                </button>
              </div>
              {deleteCommentButton}
            </div>
          );
        }
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
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
    }
  }

  handleThumbsUpOnClick = selectedComment => {
    if (this.state[selectedComment.comment_id] !== 'up') {
      const newComment = { ...selectedComment };
      if (this.state[selectedComment.comment_id] === 'down') {
        newComment.votes = newComment.votes + 2;
      } else {
        newComment.votes = newComment.votes + 1;
      }
      const newArrayOfComments = this.state.comments.map(comment => {
        if (comment.comment_id === selectedComment.comment_id) {
          return newComment;
        } else return comment;
      });
      this.setState({
        comments: newArrayOfComments,
        [selectedComment.comment_id]: 'up'
      });
      voteOnComment({ inc_votes: 1 }, selectedComment.comment_id);
    }
  };
  handleThumbsDownOnClick = selectedComment => {
    if (this.state[selectedComment.comment_id] !== 'down') {
      const newComment = { ...selectedComment };
      if (this.state[selectedComment.comment_id] === 'up') {
        newComment.votes = newComment.votes - 2;
      } else newComment.votes = newComment.votes - 1;
      const newArrayOfComments = this.state.comments.map(comment => {
        if (comment.comment_id === selectedComment.comment_id) {
          return newComment;
        } else return comment;
      });
      this.setState({
        comments: newArrayOfComments,
        [selectedComment.comment_id]: 'down'
      });
      voteOnComment({ inc_votes: -1 }, selectedComment.comment_id);
    }
  };

  handleDelete = selectedComment => {
    const newArrayOfComments = this.state.comments.map(comment => {
      if (comment) {
        if (comment.comment_id !== selectedComment.comment_id) {
          return comment;
        }
      }
    });
    this.setState({
      comments: newArrayOfComments
    });
    deleteComment(selectedComment.comment_id).catch(err => console.log(err));
  };
}

export default CommentDisplayer;
