const { Router } = require('express');
const postRouter = Router();
const Post = require('../models/post.model');
const homeStartingContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam hic soluta esse est, natus nostrum quam. Sit distinctio deserunt vero corporis molestiae possimus asperiores, quia autem perferendis, fugiat incidunt.Numquam voluptas, ipsam delectus quo minus dicta suscipit. Ipsa optio ullam corrupti eveniet. Inventore praesentium laboriosam officiis, dicta soluta quas dolores in, autem deleniti a, fugit vero ea? Earum, officiAb error vero commodi deleniti debitis consectetur soluta, fuga, quisquam nesciunt tempora inventore ratione sapiente veniam veritatis ad laboriosam quidem consequuntur aut recusandae tenetur excepturi! Voluptatum aperiam ut sunt vero.';
const aboutContent =
  ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam hic soluta esse est, natus nostrum quam. Sit distinctio deserunt vero corporis molestiae possimus asperiores, quia autem perferendis, fugiat incidunt. Numquam voluptas, ipsam delectus quo minus dicta suscipit. Ipsa optio ullam corrupti eveniet. Inventore praesentium laboriosam officiis, dicta soluta quas dolores in, autem deleniti a, fugit vero ea? Earum, officia?Ab error vero commodi deleniti debitis consectetur soluta, fuga, quisquam nesciunt tempora inventore ratione sapiente veniam veritatis ad laboriosam quidem consequuntur aut recusandae tenetur excepturi! Voluptatum aperiam ut sunt vero.';

//routes
postRouter.post('/compose', function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });
  post.save(function (err) {
    if (!err) {
      res.render('/');
    }
  });
  return res.redirect('/');
});
postRouter.get('/', function (req, res) {
  Post.find({}, function (err, posts) {
    res.render('home', {
      startingContent: homeStartingContent,
      posts: posts,
    });
  });
});

//about Page
postRouter.get('/about', function (req, res) {
  res.render('about', { aboutContent: aboutContent });
});

//compose Page
postRouter.get('/compose', function (req, res) {
  res.render('compose');
});

//contact Page
postRouter.get('/contact', function (req, res) {
  res.render('contact');
});


postRouter.get('/posts/:postId', function (req, res) {
  const requestedId = req.params.postId;
  Post.findOne({ _id: requestedId }, function (err, post) {
    res.render('post', {
      title: post.title,
      content: post.content,
    });
  });
});

module.exports = postRouter;
