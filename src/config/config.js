require('dotenv').config()

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres'
  },
  // use url connection to postgres
  production: {
    use_env_variable: 'DATABASE_URL',
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false
      }
    }
  }
}
