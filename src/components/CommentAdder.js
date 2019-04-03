import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { postComment } from '../api';

class CommentAdder extends Component {
  state = {
    article_id: 0,
    author: 0,
    body: 0
  };
  componentDidMount() {
    const { article_id, user } = this.props;
    this.setState({ article_id, author: user });
  }
  render() {
    const { body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea
              name="body"
              value={body}
              onChange={this.handleInputChange}
            />
          </div>
          <input type="submit" />
        </form>
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
      console.log(comment);
      navigate(`/articles/${comment.article_id}`, {
        state: { isNewFromUser: true }
      });
    });
  };
}

export default CommentAdder;
