import React, { Component } from 'react';
import { navigate } from '@reach/router';
import CreatableSelect from 'react-select/lib/Creatable';
import createSearchOptions from '../utils/ArticleAdderUtils';
import { postArticle, getTopics } from '../api';

class ArticleAdder extends Component {
  state = {
    topicText: '',
    selectedOption: null,
    title: 'article title',
    body: 'article body',
    article_id: '',
    topics: []
  };
  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics: topics });
    });
  }

  render() {
    const { selectedOption, title, body, topics } = this.state;
    // make this delete default input value on click
    return (
      <div>
        <div>
          <CreatableSelect
            name="topicSelect"
            value={selectedOption}
            onChange={this.handleTopicChange}
            onInputChange={this.handleTopicInputChange}
            options={createSearchOptions(topics)}
            isDisabled={selectedOption !== null}
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </div>
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
  handleTopicChange = (inputValue, actionMeta) => {
    if (inputValue) {
      this.setState({ selectedOption: inputValue.value });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    const { title, body, selectedOption } = this.state;
    const { user } = this.props;
    const postBody = {
      title,
      body,
      author: user,
      topic: selectedOption
    };
    postArticle(postBody).then(article => {
      navigate(`/articles/${article.article_id}`, {
        state: { isNewFromUser: true }
      });
    });
  };
}

export default ArticleAdder;
