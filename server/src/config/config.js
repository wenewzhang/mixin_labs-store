module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'mixin_labs-store',
    user: process.env.DB_USER || 'store',
    password: process.env.DB_PWD || '123456',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storeage: './mixin_labs-store.sqlite'
    }

  }
}
