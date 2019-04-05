import React, { Component } from 'react';
import { navigate } from '@reach/router';
import CreatableSelect from 'react-select/lib/Creatable';
import createSearchOptions from '../utils/ArticleAdderUtils';
import { postArticle, getTopics, createNewTopic } from '../api';

class ArticleAdder extends Component {
  state = {
    topicText: '',
    selectedOption: undefined,
    title: 'article title',
    body: 'article body',
    article_id: '',
    topics: [{ slug: '' }],
    topicDescription: 'Topic Description',
    newTopicDescription: 'describe your new topic'
  };
  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics: topics });
    });
  }
  render() {
    const {
      selectedOption,
      title,
      body,
      topics,
      newTopicDescription
    } = this.state;
    const existingTopics = topics.map(topic => {
      return topic.slug;
    });
    let topicInfo = <div />;
    if (selectedOption !== undefined) {
      topicInfo = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="newTopicDescription"
                value={newTopicDescription}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </form>
        </div>
      );
    }
    if (existingTopics.includes(selectedOption)) {
      topicInfo = <div />;
    }
    let articleForm = <div />;
    if (selectedOption !== undefined) {
      articleForm = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="title"
                value={title}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <textarea
                name="body"
                value={body}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <input type="submit" />
          </form>
        </div>
      );
    }
    return (
      <div>
        <div>
          <CreatableSelect
            name="topicSelect"
            onChange={this.handleTopicChange}
            onInputChange={this.handleTopicInputChange}
            options={createSearchOptions(topics)}
            required
            isClearable
          />
        </div>
        {topicInfo}
        {articleForm}
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

      this.setState({ selectedOptionDescription: '' });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    const {
      title,
      body,
      selectedOption,
      topics,
      newTopicDescription
    } = this.state;
    const { user } = this.props;
    const postBody = {
      title,
      body,
      author: user,
      topic: selectedOption,
      newTopicDescription
    };
    const existingTopics = topics.map(topic => {
      return topic.slug;
    });
    if (existingTopics.includes(postBody.topic)) {
      postArticle(postBody).then(article => {
        navigate(`/articles/${article.article_id}`);
      });
    } else {
      createNewTopic(postBody)
        .then(() => {
          postArticle(postBody).then(article => {
            navigate(`/articles/${article.article_id}`).catch(err => {
              console.log(err);
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
}

export default ArticleAdder;
