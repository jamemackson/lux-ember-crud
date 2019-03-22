// get connection props from env
const {
  DB_HOST = 'localhost',
  DB_PORT = '5432',
  DB_USER = 'postgres',
  DB_PASS = '',
  DB_NAME = 'api_dev'
} = process.env;

export default {
  development: {
    driver: 'pg',
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS
  },

  test: {
    driver: 'sqlite3',
    database: 'lux_api_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'lux_api_prod'
  }
};
