const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'remotemysql.com',
      port : 3306,
      user : 'j6zQXIyB22',
      password : 'r8E4xAwtmU',
      database : 'j6zQXIyB22'
    },
  });

knex.raw("SELECT 1").then(() => {
  // console.log("MySQL connected");
  return "MySQL connected";
})
.catch((e) => {
  console.log("MySQL not connected");
  console.error(e);
  return "MySQL not connected";
});

module.exports = knex;