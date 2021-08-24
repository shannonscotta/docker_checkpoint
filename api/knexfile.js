// Update with your config settings.

const pgUrl = 'db:5432'

module.exports = {

  development: {
    client: 'pg',
    connection: `postgres://admin:password@${pgUrl}/postgres`
  },
    migrations: {
      tableName: 'knex_migrations'
    }

};
