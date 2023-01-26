const express = require('express');
const about = require('./about');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });
  router.use('/about', about());

  return router;
};
