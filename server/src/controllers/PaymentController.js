const {Order} = require('../models')

module.exports = {
  async pay (req, res) {
     try {
       console.log("payment pay:")
       console.log(req.body)
       orderid = "Order" + Math.floor(Date.now() / 1000)
       newOrder = { 'orderid': orderid, assetid: 'eos', status: 'pending'}
       console.log(newOrder)
       const order = await Order.create(newOrder)
       console.log(order)
       const orderJson =  order.toJSON()
       res.send({
         user: orderJson
       })
     } catch (err) {
       res.status(400).send({
         error: 'There is a error.'
       })
     }
 }
}
