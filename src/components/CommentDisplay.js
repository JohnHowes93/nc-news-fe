import React, { Component } from 'react';
import { voteOnComment, getCommentsById } from '../api';

class CommentDisplayer extends Component {
  state = {
    comments: [],
    comment: {}
  };
  render() {
    const { comments } = this.state;
    if (comments)
      return comments.map((comment, i) => {
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
          </div>
        );
      });
    else return <div />;
  }
  componentDidMount() {
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
}

export default CommentDisplayer;
