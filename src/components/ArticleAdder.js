import React, { Component } from 'react';
import { navigate } from '@reach/router';
import Select from 'react-select';
import createSearchOptions from '../utils/ArticleAdderUtils';
import { postArticle } from '../api';

class ArticleAdder extends Component {
  state = {
    selectedOption: 'newTopic',
    title: 'Article Title',
    body: 'Article Body',
    article_id: '',
    topicToBeCreated: 'New Topic Title',
    allTopics: [
      {
        slug: 'coding',
        description: 'Code is love, code is life'
      },
      {
        slug: 'football',
        description: 'FOOTIE!'
      },
      {
        slug: 'cooking',
        description: 'Hey good looking, what you got cooking?'
      }
    ]
  };

  render() {
    const {
      selectedOption,
      title,
      body,
      allTopics,
      topicToBeCreated
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Select
              name="topicSelect"
              value={selectedOption}
              onChange={this.handleTopicChange}
              options={createSearchOptions(allTopics)}
            />
          </div>
          {selectedOption === 'newTopic' ? (
            <div>
              <input
                name="topicToBeCreated"
                value={topicToBeCreated}
                onChange={this.handleInputChange}
              />
            </div>
          ) : (
            <div>{`${selectedOption}`}</div>
          )}

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
  handleTopicChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, article_id } = this.state;
    const postBody = {
      title,
      body,
      author: 'tickle122',
      topic: 'coding'
    };
    postArticle(postBody).then(article => {
      navigate(`/articles/${article.article_id}`, {
        state: { isNewFromUser: true }
      });
    });
  };
}

export default ArticleAdder;
