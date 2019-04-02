import React, { Component } from 'react';
import { navigate } from '@reach/router';
import Select from 'react-select';
import createSearchOptions from '../utils/postNewArticleUtils';

class PostNewArticle extends Component {
  state = {
    selectedOption: 'newTopic',
    userInput: {
      title: 'Article Title',
      body: 'Article Body'
    },
    topics: {
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
    }
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
    const { title, body } = this.state.userInput;
    const { currentTopic, allTopics, topicToBeCreated } = this.state.topics;

    return (
      <div>
        <form>
          <div>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={createSearchOptions(allTopics)}
            />
          </div>
          {selectedOption === 'newTopic' && (
            <div>
              <input
                value={topicToBeCreated}
                onChange={e => this.handleChange('title', e.target.value)}
              />
            </div>
          )}

          <div>
            <input
              value={title}
              onChange={e => this.handleChange('title', e.target.value)}
            />
          </div>
          <div>
            <textarea
              value={body}
              onChange={e => this.handleChange('body', e.target.value)}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
  handleChange(e) {
    e.preventDefault();
  }
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
