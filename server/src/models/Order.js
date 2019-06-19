module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderid: {
      type: DataTypes.STRING,
      unique: true
    },
    assetid: DataTypes.STRING,
    status: DataTypes.STRING
  })

  Order.associate = function (models) {
  }

  return Order
}
