const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))
// const bcrypt = require('bcrypt');
const saltRounds = 8;

async function hashPassword (user, options) {
  if (!user.changed('password')) {
    return 0
  }
  const SALT_FACTOR = 8
  await bcrypt.hash(user.password, SALT_FACTOR, (err, hash) => {
    if (err) {
      console.log(err)
    }
    user.setDataValue('password', hash)
    // user.password = hash
    console.log("hash:" + user.password)
  })
}



module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }

  User.associate = function (models) {
  }

  return User
}
