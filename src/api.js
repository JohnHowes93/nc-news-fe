const axios = require('axios');

export const getArticleById = articleId => {
  return axios
    .get(`https://nc-news-john-howes.herokuapp.com/api/articles/${articleId}`)
    .then(function(response) {
      console.log(response.data.article);
      return response.data.article;
    })
    .catch(function(error) {
      console.log(error);
    });
};
