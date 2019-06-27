1.前端支付分成两个部分，即两个页面，先选择支付方式，再选择币。
选择支付方式：Pay by Mixin Messenger后，取得所有支持的币
而选择Transfer to Wallet(deposit) 只可选择EOS这一种币!

所以，在选择支付方式时，取得所有币的价格存入前端，
再route到选择币的页面，选择币的页面radioGroup是根据前端store的数据生成币的标签

2.服务端配置支持的币。
3.对前端选择的币进行校验
4.提供callback给MixinPayment, 修改完成的订单状态
5.订单列表与状态的显示！
