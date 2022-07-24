/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').del()
  await knex('product').insert([
    {id: 1, name: 'Kawasaki Ninja 650', price: 10.5},
    {id: 2, name: 'Kawasaki Ninja 750', price: 11.75},
    {id: 3, name: 'Kawasaki Ninja 850', price: 12.33},
    {id: 4, name: 'Kawasaki Ninja 950', price: 14.15},
    {id: 5, name: 'Kawasaki Ninja 1000', price: 17.95},
    {id: 6, name: 'Kawasaki Ninja 12R', price: 21.75},
    {id: 7, name: 'Kawasaki Ninja 14R', price: 31},
  ]);
};
