const axios = require('axios');
const baseUrl = 'https://nc-news-john-howes.herokuapp.com/api/';

export const getArticleById = articleId => {
  return axios
    .get(`${baseUrl}articles/${articleId}`)
    .then(function(response) {
      if (response.data.article) {
        return response.data.article;
      }
    })
    .catch(function(error) {
      throw error;
    });
};

export const getCommentsById = articleId => {
  return axios
    .get(`${baseUrl}articles/${articleId}/comments`)
    .then(function(response) {
      return response.data.comments;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getArrayOfArticles = (params = null) => {
  return axios(`${baseUrl}articles`, {
    params
  })
    .then(function(response) {
      return response.data.articles;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getArrayOfArticlesByTopic = params => {
  const { topic } = params;
  console.log(topic);
  return axios
    .get(`${baseUrl}articles/?topic=${topic}`)
    .then(function(response) {
      return response.data.articles;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getTopics = () => {
  return axios
    .get(`${baseUrl}topics/`)
    .then(function(response) {
      return response.data.fetchedTopics;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const postArticle = postBody => {
  return axios.post(`${baseUrl}articles/`, postBody).then(returnedArticle => {
    return returnedArticle.data.article;
  });
};

export const postComment = (postBody, article_id) => {
  return axios
    .post(`${baseUrl}articles/${article_id}/comments`, postBody)
    .then(returnedComment => {
      return returnedComment.data.comment;
    });
};

export const voteOnComment = (postBody, comment_id) => {
  return axios
    .patch(`${baseUrl}comments/${comment_id}`, postBody)
    .then(returnedComment => {
      return returnedComment.data.patchedComment.votes;
    });
};

export const voteOnArticle = (postBody, article_id) => {
  return axios
    .patch(`${baseUrl}articles/${article_id}`, postBody)
    .then(returnedArticle => {
      return returnedArticle.data.article;
    });
};

export const deleteArticle = article_id => {
  return axios.delete(`${baseUrl}articles/${article_id}`);
};

export const deleteComment = comment_id => {
  return axios.delete(`${baseUrl}comments/${comment_id}`);
};

export const createNewTopic = postBody => {
  return axios
    .post(`${baseUrl}topics/`, {
      slug: postBody.topic,
      description: postBody.newTopicDescription
    })
    .then(returnedTopic => {
      console.log('returnedTopic', returnedTopic);
    })
    .catch(err => console.log('caught error: ', err));
};
