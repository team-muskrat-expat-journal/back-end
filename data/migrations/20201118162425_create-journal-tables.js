
exports.up = function(knex) {
    return knex.schema.createTable('users', table =>{
        table.increments()
        table.string("name", 128)
        table.string("email", 128).notNullable().unique()
        table.string("password", 128).notNullable()
        table.boolean("terms").defaultTo(true)
    })
    .createTable("journal", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.text("title").notNullable();
      tbl.integer("rating").notNullable();
      tbl.text("location");
      tbl.text("date");
      tbl.text("notes");
      tbl.string("category", 128)
      tbl.string("imageUrl", 500).notNullable()
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("journal").dropTableIfExists('users');
  };
  