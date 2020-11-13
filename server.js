/* eslint-disable no-use-before-define */
const express = require('express');
const path = require('path');
const scrapper = require('./src/services/articlesScrapper');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// An api endpoint that returns a short list of items
app.get('/api/getList', async function (req, res) {
  const articles = await scrapper.getArticles();
  res.json(articles);
});
app.get('/api/getList/item', async function (req, res) {
  const { url } = req.query;
  const paragraphs = await scrapper.getArticle(url);
  res.json(paragraphs);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

const port = process.env.PORT || 5000;
app.listen(port);
