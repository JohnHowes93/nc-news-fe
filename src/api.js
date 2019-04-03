const axios = require('axios');
const baseUrl = 'https://nc-news-john-howes.herokuapp.com/api/';

export const getArticleById = articleId => {
  return axios
    .get(`${baseUrl}articles/${articleId}`)
    .then(function(response) {
      return response.data.article;
    })
    .catch(function(error) {
      console.log(error);
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
  console.log('params', params);
  return axios({
    url: 'https://nc-news-john-howes.herokuapp.com/api/articles',
    method: 'get',
    params: {
      sort_by: params
    }
  })
    .then(function(response) {
      console.log(response);
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
<<<<<<< HEAD
=======
    });
};

export const voteOnArticle = (postBody, article_id) => {
  return axios
    .patch(`${baseUrl}articles/${article_id}`, postBody)
    .then(returnedArticle => {
      return returnedArticle.data.article;
>>>>>>> 71348fe40b69b410fae337945d87c826b744367a
    });
};

export const voteOnArticle = (postBody, article_id) => {
  return axios
    .patch(`${baseUrl}articles/${article_id}`, postBody)
    .then(returnedArticle => {
      return returnedArticle.data.article;
    });
};
