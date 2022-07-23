const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST || 'remotemysql.com',
        port : process.env.DB_PORT || 3306,
        user : process.env.DB_USER || 'j6zQXIyB22',
        password : process.env.DB_PASSWORD || 'r8E4xAwtmU',
        database : process.env.DB_DATABASE || 'j6zQXIyB22'
    },
});

knex.raw("SELECT 1").then((res) => {
  console.log("MySQL connected");
})
.catch((e) => {
  console.log("MySQL not connected");
  console.error(e);
});

module.exports = knex;