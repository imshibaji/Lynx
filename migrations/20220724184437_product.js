/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product', function(table){
    table.bigIncrements('id');
    table.string('name', 150).notNullable();
    table.float('price').notNullable();
    table.integer('description').nullable();
    table.smallint('isDeleted').defaultTo(0);
    table.bigInteger('productViewed').defaultTo(0);
    table.dateTime('createdDate').defaultTo(knex.fn.now());
    table.dateTime('updatedDate').defaultTo(knex.fn.now());
    table.dateTime('deletedDate').nullable();
  })
  .createTable('currency', (table)=>{
    table.json('data');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('product').dropTable('currency');
};
