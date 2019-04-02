import React, { Component } from 'react';
import { navigate } from '@reach/router';
import Select from 'react-select';
import createSearchOptions from '../utils/postNewArticleUtils';

class PostNewArticle extends Component {
  state = {
    selectedOption: 'newTopic',
    title: 'Article Title',
    body: 'Article Body',
    article_id: '',
    topicToBeCreated: 'New Topic Title',
    currentTopic: 'coding',
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
      currentTopic,
      allTopics,
      topicToBeCreated
    } = this.state;

    return (
      <div>
        <form>
          <div>
            <Select
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
                onChange={e => this.handleInputChange(e)}
              />
            </div>
          ) : (
            <div />
          )}

          <div>
            <input
              name="title"
              value={title}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div>
            <textarea
              name="body"
              value={body}
              onChange={e => this.handleInputChange(e)}
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

  handleSubmit() {
    const { title, body, article_id } = this.state;
    const postBody = {
      title,
      body,
      author: 'tickle122',
      topic: 'coding'
    };
    navigate(`/articles/${article_id}`, { state: { isNewFromUser: true } });
  }
}

export default PostNewArticle;
