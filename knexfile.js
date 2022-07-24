// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development:{
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./mydb.sqlite"
    }
  },
  staging:{
    client: 'mysql',
    connection: {
      host : 'remotemysql.com',
      port : 3306,
      user : 'j6zQXIyB22',
      password : 'r8E4xAwtmU',
      database : 'j6zQXIyB22'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST || 'localhost',
      port : process.env.DB_PORT || 3306,
      user : process.env.DB_USER || 'user',
      password : process.env.DB_PASSWORD || 'password',
      database : process.env.DB_DATABASE || 'api_app'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
