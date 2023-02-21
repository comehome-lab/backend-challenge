const assert = require('assert');
const findTransactions = require('./');

describe('search-transactions', function() {
  const users = [
    {id: 1, email: 'user-1@comehome.fun'},
    {id: 2, email: 'user-2@comehome.fun'},
    {id: 3, email: 'user-3@comehome.fun'},
    {id: 4, email: 'user-4@comehome.fun'},
  ];

  const transactions = [
    {id: 123, user_id: 1, date: '2022-01-01T00:00:00.000Z', amount: 200},
    {id: 124, user_id: 2, date: '2022-01-02T00:00:00.000Z', amount: 100},
    {id: 125, user_id: 1, date: '2022-01-03T00:00:00.000Z', amount: 50},
    {id: 126, user_id: 4, date: '2022-01-04T00:00:00.000Z', amount: 800},
    {id: 127, user_id: 4, date: '2022-01-05T00:00:00.000Z', amount: 1000},
  ];

  it('returns the first chronological transaction id with the amount for each user', () => {
    assert.deepEqual(findTransactions(users, transactions), [
      {
        transaction_id: 123,
        user_email: 'user-1@comehome.fun',
        amount: 200
      },
      {
        transaction_id: 124,
        user_email: 'user-2@comehome.fun',
        amount: 100
      },
      {
        transaction_id: 126,
        user_email: 'user-4@comehome.fun',
        amount: 800
      }
    ]);
  });
});
