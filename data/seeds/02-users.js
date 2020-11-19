
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'tom', email: 'musk@rat.com', password:'12345', terms: true}
      ]);
};
