const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require('bcrypt');
const saltRounds = 10

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async pay (req, res) {
     try {
       console.log("payment pay:")
       console.log(req.body)
     } catch (err) {
       res.status(400).send({
         error: 'There is a error.'
       })
     }
 }
}
