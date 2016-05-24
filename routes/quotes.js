var express = require('express');
var router = express.Router();

var quotes = require('../models/quotes.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  quotes.getQuote()
    .then(function(quoteObj) {
      res.json(quoteObj);
    })
    .catch(function(err) {
      res.json(err);
    })
});

module.exports = router;
