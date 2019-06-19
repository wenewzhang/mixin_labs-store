const {Order} = require('../models')
// const mixinpayment = require('../services/MixinPayService')
const axios = require('axios')
const config = require('../config/config')

module.exports = {
  async pay (req, res) {
     try {
       console.log("payment pay:")
       console.log(req.body)
       const asset = '6cfe566e-4aad-470b-8c9a-2fd35b49c68d'
       // const asset = '965e5c6e-434c-3fa9-b780-c50f43cd955c'
       orderid = "Order" + Math.floor(Date.now() / 1000)
       newOrder = { 'orderid': orderid, 'assetid': asset, 'status': 'pending'}
       console.log(newOrder)
       const order = await Order.create(newOrder)
       if ( req.body.source === 'deposit' ) {
         newMxOrder = { 'order_id': orderid, 'asset_uuid': asset, 'amount': '1', 'source': 'deposit'}
       } else {
         newMxOrder = { 'order_id': orderid, 'asset_uuid': asset, 'amount': '1', 'source': 'mixin'}
       }
       console.log(newMxOrder)
       const response = await axios.post(config.mixin_pay_url, newMxOrder)
       // const mxorder = await mixinpayment.create_order(newMxOrder)
       console.log(response.status)
       if ( response.status === 200 ) {
         console.log(response.data)
         if ( response.data.status === true ) {
         res.send({
           pay: response.data.pay,
           source: req.body.source
         })
       } else {
         res.status(400).send({
           error: 'Create order fail!'
         })
       }
     } else {
       res.status(400).send({
         error: 'mixin payment service call error!'
       })
     }
   }  catch (err) {
       res.status(400).send({
         error: 'There is a error.'
       })
     }
 }
}
