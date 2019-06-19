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
  async register (req, res) {
     try {
       var hash = bcrypt.hashSync(req.body.password, saltRounds)
       req.body.password = hash
       console.log(req.body)
       const user = await User.create(req.body)
       const userJson = user.toJSON()
       res.send({
         user: userJson,
         token: jwtSignUser(userJson)
       })
     } catch (err) {
       res.status(400).send({
         error: 'This email account is already in use.'
       })
     }
 },
   async login (req, res) {
    try {
      console.log("login ...")
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      console.log(user.password)

      const isPasswordValid = await user.comparePassword(password)
      console.log(isPasswordValid)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
