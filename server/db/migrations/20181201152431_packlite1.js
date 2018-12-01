
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('items', table => {
      table.increments('itemId').primary();
      table.string('name', 50);
      table.string('subcategory', 30);
      table.integer('weightInOz');
      table.decimal('price');
      table.string('notes');
    }),
    knex.schema.createTable('packlists', table => {
      table.increments('packId').primary();
      table.string('name', 50);
      table.json('items');
      table.string('notes');
    })
  ]);
};

exports.down = function(knex, Promise) {
  
};