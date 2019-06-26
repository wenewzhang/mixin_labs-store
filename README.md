#  How to create a Bitcoin Payment online shop
Here show you how to create a online shop by Expressjs & Vue, and using Mixin Network for confirm the payment instantly!

## Build server
``` bash
git clone https://github.com/wenewzhang/mixin_labs-store.git
cd server
npm install
npm start
```
## Build web client
```bash
cd client
yarn
yarn serve
```
Let client know the server access api url, vi client/services/Api.js

- baseURL: 'http://localhost:8081',

## Configure of the server
```bash
vi server/src/config/config.js

const path = require('path');
module.exports = {
  port: 8081,
  mixin_pay_url: 'http://127.0.0.1:8910/create_order',
  asset_price_base_on_usdt: 'https://exinone.com/exincore/markets?base_asset=815b0b1a-2764-3736-8faa-42d694fa620a',
  db: {
    database: process.env.DB_NAME || 'mixin_labs-store',
    user: process.env.DB_USER || 'store',
    password: process.env.DB_PWD || '123456',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../mixin_labs-store.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
```
- Let the server know Mixin Payment access url for order create!
  for example: http://127.0.0.1:8910/create_order

## Mixin Payment install

### Install go
Here show you how to install Go lang
https://github.com/wenewzhang/mixin_labs-go-bot

### Install Mixin Payment

https://github.com/wenewzhang/mixin_payment

### Configure the Mixin Payment
Step 1: Create a [Mixin Bot](https://mixin-network.gitbook.io/mixin-network/mixin-messenger-app/create-bot-account), Fill the settings information in the config.go
https://github.com/wenewzhang/mixin_payment/blob/master/config/config.go

Step 2: Change the MASTER_UUID  to your Mixin Messenger account uuid, Mixin Payment should transfer the incoming asset to here!

Step 3: All supported Assets list, Put all the supported assets uuid here!

## Start
Start Mixin Payment
```bash
cd noticed
make
./noticed &

cd ../
make
./mixin_payment &
```

Start Server
```bash
cd server
npm start
```

Start Client
```bash
cd client
yarn serve
```

## Snapshots of this Store

![Register](https://github.com/wenewzhang/mixin_labs-store/raw/master/pics/login.jpg)

![Payment](https://github.com/wenewzhang/mixin_labs-store/raw/master/pics/pay.jpg)

![PayEOS](https://github.com/wenewzhang/mixin_labs-store/raw/master/pics/payeos.jpg)
