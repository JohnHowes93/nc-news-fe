const axios = require('axios');

export const getArticleById = articleId => {
  return axios
    .get(`https://nc-news-john-howes.herokuapp.com/api/articles/${articleId}`)
    .then(function(response) {
      return response.data.article;
    })
    .catch(function(error) {
      console.log(error);
    });
};
export const getCommentsById = articleId => {
  return axios
    .get(
      `https://nc-news-john-howes.herokuapp.com/api/articles/${articleId}/comments`
    )
    .then(function(response) {
      console.log(response);
      return response.data.comments;
    })
    .catch(function(error) {
      console.log(error);
    });
};
