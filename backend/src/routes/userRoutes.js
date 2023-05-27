var express = require('express');
var userRouter = express.Router();

userRouter.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
userRouter.get('/', function(req, res) {
  res.send('home page');
});

// Define the about route
userRouter.get('/about', function(req, res) {
  res.send('About us');
});


module.exports = userRouter;