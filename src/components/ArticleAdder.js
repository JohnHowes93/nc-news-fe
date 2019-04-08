import React, { Component } from 'react';
import { navigate } from '@reach/router';
import CreatableSelect from 'react-select/lib/Creatable';
import createSearchOptions from '../utils/ArticleAdderUtils';
import { postArticle, getTopics, createNewTopic } from '../api';
import '../NewArticle.css';

class ArticleAdder extends Component {
  state = {
    topicText: '',
    selectedOption: undefined,
    title: '',
    body: '',
    article_id: '',
    topics: [{ slug: '' }],
    topicDescription: 'Topic Description',
    newTopicDescription: '',
    user: null
  };
  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics: topics, user: this.props.user });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      getTopics().then(topics => {
        this.setState({ topics: topics, user: this.props.user });
      });
    }
  }
  render() {
    const {
      selectedOption,
      title,
      body,
      topics,
      newTopicDescription,
      user
    } = this.state;
    const existingTopics = topics.map(topic => {
      return topic.slug;
    });
    let topicInfo = <div />;
    if (selectedOption !== undefined) {
      topicInfo = (
        <div className="new-topic-description">
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="new-topic-description-prompt ">
                Enter a description for your new topic
              </div>
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
        <div className="new-article-container">
          <form onSubmit={this.handleSubmit}>
            <div className="new-article-form-title">
              <div>Article Title</div>
              <div>
                <input
                  name="title"
                  value={title}
                  onChange={this.handleInputChange}
                  required
                  cols={20}
                />
              </div>
            </div>
            <div className="new-article-form-body">
              <div>Article Body</div>
              <textarea
                name="body"
                value={body}
                onChange={this.handleInputChange}
                required
                cols={60}
                rows={3}
              />
            </div>
            <input
              type="submit"
              className="new-article-form-submit"
              value="Post a new article"
            />
          </form>
        </div>
      );
    }
    if (user) {
      return (
        <div className="new-article">
          <div className="topic-selector">
            <div className="topic-text">
              <p>
                Select a topic for your post, or start typing to create a new
                topic
              </p>
            </div>
            <CreatableSelect
              name="topicSelect"
              onChange={this.handleTopicChange}
              onInputChange={this.handleTopicInputChange}
              options={createSearchOptions(topics)}
              required
              isClearable
              style={{ width: '50%' }}
              autosize={false}
            />
            {topicInfo}
          </div>
          {articleForm}
        </div>
      );
    } else return <p>log in to create a new article</p>;
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
      newTopicDescription,
      user
    } = this.state;
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
