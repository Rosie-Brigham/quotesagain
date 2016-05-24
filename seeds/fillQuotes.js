
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('quotes').del(),

    // Inserts seed entries
    knex('quotes').insert({id: 1, quote: 'It is our choices, Harry, that show what we truly are, far more than our abilities.', author: 'Dumbledore' }),
    knex('quotes').insert({id: 2, quote: 'It matters not what someone is born, but what they grow to be.', author: 'Dumbledore'}),
    knex('quotes').insert({id: 3, quote: 'It does not do to dwell on dreams and forget to live.', author: 'Dumbledore'}),
    knex('quotes').insert({id: 4, quote: 'There are all kinds of courage,” said Dumbledore smiling. “It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.', author: 'Dumbledore'}),
    knex('quotes').insert({id: 5, quote: 'People find it far easier to forgive others for being wrong than being right.', author: 'Dumbledore'}),
    knex('quotes').insert({id: 6, quote: 'We are only as strong as we are united, as weak as we are divided.', author: 'Dumbledore'}),
    knex('quotes').insert({id: 7, quote: 'Differences of habit and language are nothing at all if our aims are identical and our hearts are open.', author: 'Dumbledore'}),
    knex('quotes').insert({id: 8, quote: 'We cannot choose our fate, but we can choose others. Be careful in knowing that.', author: 'Dumbledore'}),
    knex('quotes').insert({id: 9, quote: 'The world isn’t split into good people and Death Eaters. We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.', author: 'Dumbledore'}),
    knex('quotes').insert({id: 10, quote: 'Why do we even *have* that lever?', author: 'Yzma'}),
    knex('quotes').insert({id: 11, quote: 'OK, why does she even have that leve?', author: 'Kuzco'}),
    knex('quotes').insert({id: 12, quote: 'Pull the lever Kronk.         WRONG LEVERRRRR...', author: 'Yzma'}),
    knex('quotes').insert({id: 13, quote: 'My spinach puffs!!', author: 'Kronk'}),
    knex('quotes').insert({id: 14, quote: 'I\'m sorry, but you\'ve thrown off the Emperor\'s groove.', author: 'Palace Guard'}),
    knex('quotes').insert({id: 15, quote: 'We realize the importance of our voices only when we are silenced.', author: 'Malala Yousafzai'}),
    knex('quotes').insert({id: 16, quote: 'You take your life in your own hands, and what happens? A terrible thing: no one to blame.', author: 'Erica Jong'}),
    knex('quotes').insert({id: 17, quote: 'Imagine the terrifying sight of a hundred thousand hedgehogs staring at you in silence.', author: 'Marcus Bridgestock'}),
    knex('quotes').insert({id: 18, quote: 'I was expecting some more willies', author: 'Nell Brigham'}),
    knex('quotes').insert({id: 19, quote: 'Dreckly is not a word but a way of life', author: 'Anna Brigham'})

  );
};
