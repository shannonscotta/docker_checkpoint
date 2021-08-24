
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, first: 'bryson', last: 'crandall',  dateOfBirth: '1993-12-01'},
        {id: 2, first: 'shane', last: 'robinson',  dateOfBirth: '1994-07-01'},
        {id: 3, first: 'scott', last: 'shannon',  dateOfBirth: '1995-08-01'},
        {id: 4, first: 'joe', last: 'dirt',  dateOfBirth: '1977-04-04'},
      ]);
    });
};



