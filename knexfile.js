// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST || 'remotemysql.com',
      port : process.env.DB_PORT || 3306,
      user : process.env.DB_USER || 'j6zQXIyB22',
      password : process.env.DB_PASSWORD || 'r8E4xAwtmU',
      database : process.env.DB_DATABASE || 'j6zQXIyB22'
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
