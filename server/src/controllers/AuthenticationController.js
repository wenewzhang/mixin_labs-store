const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
     try {
       console.log('register.....')
       console.log(req.body)
       const user = await User.create(req.body)
       console.log(user)
       const userJson = user.toJSON()
       console.log(userJson)
       // onsole.log("to json ...............")
       // console.log(userJson)
       res.send({
         user: userJson,
         token: jwtSignUser(userJson)
       })
     } catch (err) {
       res.status(400).send({
         error: 'This email account is already in use.'
       })
     }
 }
}
