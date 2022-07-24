const dblink = require('../knexfile');
let knex = require('knex');
const environment = process.env.ENV || 'staging';

knex = knex(dblink[environment]);


knex.raw("SELECT 1").then((res) => {
  console.log("MySQL connected");
})
.catch((e) => {
  console.log("MySQL not connected");
  console.error(e);
});

module.exports = knex;