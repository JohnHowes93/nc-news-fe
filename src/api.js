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

export const getArrayOfArticles = () => {
  return axios
    .get(`${baseUrl}articles/`)
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

// change axios to
// axios({
//   method:
//   path:
//   params: {
//     page
//   }
// })
