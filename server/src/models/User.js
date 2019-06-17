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
    // user.setDataValue('password', hash)
    user.password = hash
    console.log(user.password)
  })
}

// function hashPassword (user, options) {
//   // const SALT_FACTOR = 8
//
//   if (!user.changed('password')) {
//     return
//   }
//
//   return bcrypt.genSalt(saltRounds, function(err, salt) {
//       bcrypt.hash(user.password, salt, function(err, hash) {
//           // Store hash in your password DB.
//           user.setDataValue('password', hash)
//       });
//   });
//   // bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
//       // Store hash in your password DB.
//   // });
//   // return bcrypt
//   //   .genSaltAsync(SALT_FACTOR)
//   //   .then(salt => bcrypt.hashAsync(user.password, salt, null))
//   //   .then(hash => {
//   //     user.setDataValue('password', hash)
//   //   })
// }

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    console.log(password)
    console.log(this.password)
    console.log(bcrypt.compare(password, this.password))
    return bcrypt.compare(password, this.password)
  }

  User.associate = function (models) {
  }

  return User
}
