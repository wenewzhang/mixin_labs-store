const AuthenticationController = require('./controllers/AuthenticationController')
const PaymentController = require('./controllers/PaymentController')

const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
  app.post('/pay', isAuthenticated,PaymentController.pay)
}
