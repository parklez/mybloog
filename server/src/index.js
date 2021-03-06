/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const app = express();

const port = require('./config/app');

// Middleware
app.use(express.json());

// Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const projectsRoute = require('./routes/projects');
app.use('/projects', projectsRoute);

// Server static files
app.use(express.static(`${__dirname}/../public`));

// https://www.devmedia.com.br/subindo-uma-aplicacao-angular-para-o-heroku/40260
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

module.exports = app;
