const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const Post = require('./models/post.model');
const mongoose = require('mongoose');
const postRouter = require('./routes/post.routes');
const { connectTomongodb } = require('./connection');
connectTomongodb();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', postRouter);

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
