// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version: '10.5',
    connection: {
      host: '127.0.0.1',
      user: '',
      password: '',
      database: 'packlite'
    },
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/development'
    }
  }

};
