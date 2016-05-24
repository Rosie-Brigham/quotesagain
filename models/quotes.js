var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getQuote() {
  const quoteId = Math.floor((Math.random() * 19) + 1)
  var quote = knex('quotes').where('id', quoteId)
  console.log(quote)
  return quote
}

module.exports = {
 getQuote: getQuote,
}