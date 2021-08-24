
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments('id'); 
      table.string('first').notNullable();
      table.string('last');
      table.date('dateOfBirth');
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };

