export default {
  development: {
    driver: 'sqlite3',
    database: 'lux_api_dev'
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
