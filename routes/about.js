const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.send('About this wiki');
  });
  router.post('/', (request, response) =>
    response.send('About this wiki: POST')
  );

  return router;
};
