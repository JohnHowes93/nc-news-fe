import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { postComment } from '../api';

class CommentAdder extends Component {
  state = {
    article_id: 0,
    author: 0,
    body: '',
    user: null
  };
  componentDidMount() {
    const { article_id, user } = this.props;
    this.setState({ article_id, author: user });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      const { user } = this.props;
      this.setState({ author: user });
    }
  }
  render() {
    const { body } = this.state;
    return (
      <div className="new-comment">
        <div className="new-comment-header">Post a comment</div>
        <div className="new-comment-text">
          <form onSubmit={this.handleSubmit}>
            <span>
              <textarea
                name="body"
                value={body}
                onChange={this.handleInputChange}
                rows={10}
                cols={50}
              />
            </span>
            <div className="new-comment-submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleTopicChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body, article_id, author } = this.state;
    const postBody = {
      body,
      article_id,
      username: author
    };
    postComment(postBody, article_id).then(comment => {
      navigate(`/articles/${comment.article_id}`, {
        state: { isNewFromUser: true }
      });
    });
  };
}

export default CommentAdder;
