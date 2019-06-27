#  How to using Express.js & Vue.js create a Bitcoin Payment online shop
Express.js is a light-weight web application framework to help organize your web application into an MVC architecture on the server side.
Vue.js is a progressive framework for building user interfaces for frontend developers.
Mixin Payment is a open source Bitcoin payment base on Mixin Network,
Here show you how to create a online shop by Expressjs & Vue, and using Mixin Network for confirm the payment instantly!

Prepartions：
This project dependent on packages like below:

- Go lang  1.12.5
- npm 6.9.0
- yarn 1.16.0
- node v8.16.0


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
- baseURL Let the server know Mixin Payment access url for order create!
  for example: http://127.0.0.1:8910/create_order
- asset_price_base_on_usdt  get coins price from ExinCore.
- db  database settings, here using sqlite, you can using MySQL etc.
- authentication default is secret.

## Mixin Payment install

### Go lang installation.
Steps install Go 1.12.5 on Ubuntu.
```bash
mkdir /usr/local/src
wget https://dl.google.com/go/go1.12.linux-amd64.tar.gz
tar xvf go1.12.linux-amd64.tar.gz
echo 'export PATH=/usr/local/src/go/bin:$PATH' >> ~/.bashrc
root@n3:/usr/local/src# source  ~/.bashrc
```

Set the GOPATH
```bash
mkdir ~/workspace/go
echo 'export GOPATH="$HOME/workspace/go"' >> ~/.bashrc
source ~/.bash_profile
```


### Install & run Mixin Payment
```bash
go get -u github.com/wenewzhang/mixin_payment
cd ~/workspace/go/src/github.com/wenewzhang/mixin_payment
go build
./mixin_payment &

cd noticed
go build
./noticed &
```

### Configure the Mixin Payment
Step 1: Create a [Mixin Bot](https://mixin-network.gitbook.io/mixin-network/mixin-messenger-app/create-bot-account), Fill the settings information in the config.go
```go
const (
	ClientId        = "a1ce2967-a534-417d-bf12-c86571e4eefa"
	ClientSecret    = "a3f52f6c417f24bfdf583ed884c5d0cb489320c58222b061298e4a2d41a1bbd7"
	PIN 						= "457965"
	PinToken        = "0t4EG7tJerZYds7N9QS0mlRPCYsEVTQBe9iD1zNBCFN/XO7XEB87ypsCDWfRmDiZ7izzB/nokuMJEu6RJShMHCdIwYISU9xckA/8hIsRVydvoP14G/9kRidMHl/3RPLDMK6U2yCefo2BH0kQdbcRDxpiddqrMc4fYmZo6UddU/A="
	SessionId       = "26ed1f52-a3b4-4cc3-840f-469d3f19b10b"
  PrivateKey      = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDaSPE8Cu18xzr8MOcgJx8tQnRdlS7c6JVs23497IGdIybIUYmZ
8zvgrFozpGjQYz2ayRDMWUQd/wm7e0Tf7n4bVCmQfkk72usAHX6pNA4HUeTeTmDT
sZQKdVx0K84Y3u512cAi5artnUjIsFRPP/LhAX0ujdgNMWIcHrMRh77s1wIDAQAB
AoGAVPW3Dwuhy8MvriDKlLUlaVRIPnRmPQ05u5ji1e9Ls4GPAsDZsdX+JEBxC1Ce
ix1VSP2hUCgeXx55B0O/VvlYk0pfogrxDgOw2dP04uboMG7tSE4TZK8J9zFPUrE0
wizFmbkgV2OEw33r00FqEhr0KnB9kXOzB5BvKN/FVyXui+ECQQDz1x3hOypW2kM9
uOqjQyg55VDkkXVZ8RgOmVd24MfkDjRauj1oGgLUWvINzhmXN5m84IhlOz1hgEuO
enHOpMmDAkEA5SuVeRhBZofUoaRbFxWL4jAN6+uuxFxZ0gCc9l4gwFkQp0RbEw/S
tiX9Cl06JR2oc2FBlaO5Vi1u8XfxOSUzHQJBANijfKaJHFrB3A/QZJbcqbaWaEJK
gYqBSzBdSHoTx0R04krhQIFm6rCkhH2DaPUSrwJCMqxN74DarUZOvyIrAeUCQH2F
ecFx/6BhFZ3Tn/Ds5ElneLiXxonW63uSymZG+DlijzSOxDOUnx0VgZuDpK1fqTxJ
MNr9ai5BhFrOD1n1fiECQBafDxsfFQv3w6j5/2PL54DhddGo50FzGxYR1LlttdVI
Q04EytqK7grDDS9PsfeXqdUo0D3NMSJ0BYs/kDsqGSc=
-----END RSA PRIVATE KEY-----`
)
```

Step 2: Change the MASTER_UUID  to your Mixin Messenger account uuid, Mixin Payment should transfer the incoming asset to here!
```go
const (
	SqlitePath = "./payment.db"
	//check the pending order second
	CheckPendingOrderInterval = 5
	//minutes
	OrderExpired              = 30
	// MASTER_UUID      = ""
	MASTER_UUID               = "0b4f49dc-8fb4-4539-9a89-fb3afc613747" //transfer the coin to master if it setted
)
```

Step 3: All supported Assets list, Put all the supported assets uuid here!
```go
var Assets = map[string]bool{
	"815b0b1a-2764-3736-8faa-42d694fa620a": true,//USDT
	"6cfe566e-4aad-470b-8c9a-2fd35b49c68d": true,//EOS
	"965e5c6e-434c-3fa9-b780-c50f43cd955c": true,//CNB
	"2204c1ee-0ea2-4add-bb9a-b3719cfff93a": true,//ETC
	"23dfb5a5-5d7b-48b6-905f-3970e3176e27": true,//XRP
	"27921032-f73e-434e-955f-43d55672ee31": true,//NEM
	"43d61dcd-e413-450d-80b8-101d5e903357": true,//Eth
	"6472e7e3-75fd-48b6-b1dc-28d294ee1476": true,//Dash
	"6770a1e5-6086-44d5-b60f-545f9d9e8ffd": true,//DOGE
	"76c802a2-7c88-447f-a93e-c29c9e5dd9c8": true,//LTC
	"990c4c29-57e9-48f6-9819-7d986ea44985": true,//Siacoin
	"a2c5d22b-62a2-4c13-b3f0-013290dbac60": true,//ZEN
	"c6d0c728-2624-429b-8e0d-d9d19b6592fa": true,//BTC
	"c996abc9-d94e-4494-b1cf-2a3fd3ac5714": true,//ZEC
	"fd11b6e3-0b87-41f1-a41f-f0e9b49e5bf0": true,//BCH
	"c94ac88f-4671-3976-b60a-09064f1811e8": true,//XIN
	"43b645fc-a52c-38a3-8d3b-705e7aaefa15": true,//CANDY
}
```

## Snapshots of this Store

![Register](https://github.com/wenewzhang/mixin_labs-store/raw/master/pics/login.jpg)

![Payment](https://github.com/wenewzhang/mixin_labs-store/raw/master/pics/pay.jpg)

![PayEOS](https://github.com/wenewzhang/mixin_labs-store/raw/master/pics/payeos.jpg)
