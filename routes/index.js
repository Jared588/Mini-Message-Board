var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Messageboard', messages: messages });
});

/* GET new message form */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Create message' });
});

/* Handle post requests */
router.post('/new', function(req, res, next) {
  // Get info from req.body
  const { user, message } = req.body;
  // Add info to array
  messages.push({ text: message, user: user, added: new Date()})
  // Redirect to /
  res.redirect('/')
});

module.exports = router;
