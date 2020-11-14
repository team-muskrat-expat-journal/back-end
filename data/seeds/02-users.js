
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'musk@rat.com', password:'12345'},
        {id: 2, username: 'swamp@rat.com', password:'tasty'},
        {id: 3, username: 'skratstew@gmail.com', password:'yummy'}
      ]);
};
