const path = require('path');

module.exports = {
  port: 8081,
  mixin_pay_url: 'http://127.0.0.1:8910/create_order',
  asset_price_base_on_usdt: 'https://exinone.com/exincore/markets?base_asset=815b0b1a-2764-3736-8faa-42d694fa620a',
  db: {
    database: process.env.DB_NAME || 'mixin_labs-store',
    user: process.env.DB_USER || 'store',
    password: process.env.DB_PWD || '123456',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../mixin_labs-store.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
