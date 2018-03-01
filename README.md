BitGo cli v2
=======

Command line interface for our v2 api.

# Overview

This command line tool is used to interact with our v2 api in your native command line program. You can use it to view information on your wallets, view balances, send from a wallet to an address and more. Examples will be provided below.

# Testnet

By default, **bgo** will use the production Bitcoin network, and will authenticate
with **www.bitgo.com**. In order to use BitGo's test environment at **test.bitgo.com**, either use **-e test** on the command line, or set the following environment variable:
```bash
$ export BITGO_ENV=test
```
The testnet environment is a completely separate namespace from the BitGo production database. You will need to set up separate accounts on [test.bitgo.com](https://test.bitgo.com/) for testing purposes.  Note that in the test environment, while standard OAuth codes still work for 2FA, it is also possible to use a code of 0000000 (7 zeroes).

# Sessions

The tool maintains one current login session per environment (prod or test). The sessions are persisted in JSON format files in **~/.bgo**.  Each session maintains the user's current auth token, current coin type, and maintains a current wallet. All of the commands that operate on a wallet use this current coin and wallet context. In order to operate on a different coin or wallet, it must first be selected using the `coin [coinType]` and `wallet get [walletId]` commands.

# Commands

Run `-h` on any command or sub-command to see what subcommands and arguments can be used.

```
$ bgo -h
usage: bgo [-h] [-v] [-e ENV] [-j]
          {login,logout,token,coin,user,wallet,address} ...

BitGo Command Line Tool

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -e ENV, --env ENV     BitGo environment to use: prod (default) or test. Can 
                        also be set with the BITGO_ENV environment variable.
  -j, --json            output JSON (if available)

subcommands:
  {login,logout,token,coin,user,wallet,address}
    login               Sign in to BitGo
    logout              Sign out of BitGo
    token               Get or set the current auth token
    coin                Set a coin type for v2 admin routes (e.g. tbtc,
                         btc, trmg, rmg, teth, eth, txrp, xrp, tltc, ltc)
    fee                 get fee info for a given coin, uses session coin by 
                         default
    user                User operations (use user -h to see commands)
    wallet              Wallet operations (use wallet -h to see commands)
    address             Address operations (use address -h to see commands)

```

Additional flags that can be added before any command.

short | long | description
--- | --- | ---
-u | --username | The email/username of your account
-p | --password | The password
-o | --otp | A two factor authentication code

### Settings commands

These commands are for setting the state of the __bg__ cli tool.

#### Coin
```bash
$ bgo coin btc
```

This will set the session coin to btc. This setting will be used by other commands that need a coin parameter.

*If on testnet, make sure all coins start with t, so the command would be `bgo coin tbtc` with `export BITGO_ENV=test` set or `bgo -e test coin tbtc`*

#### Fee
```bash
$ bgo fee
```

It will then print out the feePerKb of the session coin

```
feePerKb:           1009
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-c | --coin | The coin to use instead of the session coin
-n | --numBlocks | The number of block to target for the fee (Only supports btc)


```bash
$ bgo fee -c btc -n 5
```


#### Login
```bash
$ bgo login
```

It will then ask you for your email, password, and 2fa code.

```
Email: example@bitgo.com
Password: *********

2-Step Verification Code: 000000
Logged in as example@bitgo.com from 127.0.0.1
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-u | --username | The email/username of your account
-p | --password | The password
-o | --otp | A two factor authentication code


```bash
$ bgo login -u example@bitgo.com -p ********* -o 0000000
```

#### Logout
```bash
$ bgo logout
```

This will log the user out of the current session, making other commands fail due to not being logged in.

## User Commands
```
$ bgo user -h
usage: bgo user [-h] {get,wallets} ...

Optional arguments:
  -h, --help     Show this help message and exit.

user commands:
  {get,wallets}
    get          Get the current user
    wallets      List your wallets of type session coin

```


#### get
```bash
$ bgo user get
```

Use this command to see the currently logged in username and Id.

```
Id:        543c11ed356d00cb7600000b98794503
Username:  tester@bitgo.com
```

#### wallets
```bash
$ bgo user wallets -l 3
```

It will print a list of wallets for the current session coin and logged in user.

```
INDEX  ID                                   LABEL                                    BALANCE       
0      5935d4cc695ba5d307327022b5c5b57d     Test tbtc wallet                         1.3           
1      5935d53579dac2c407c13dac489de37e     v2 wallet                                0             
2      5935d53467a315cb075de17f202fee71     v2 wallet                                0       
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-l | --limit    | The number of wallets to fetch (defaults to 25)
-b | --batchGet | Enable batch fetching, will get limit wallets per page


## Wallet Commands
```
$ bgo wallet -h
usage: bgo wallet [-h]
                 
                 {get,transfer,transferlist,unspents,sendtoaddress,consolidate,fanout,unlock,lock,freeze}
                 ...

Optional arguments:
  -h, --help            Show this help message and exit.

wallet commands:
  {get,transfer,transferlist,unspents,sendtoaddress,consolidate,fanout,unlock,lock,freeze}
    get                 Get info on and set the current session wallet by its id
    transfer            Get information of a transfer on a wallet
    transferlist        Get transfers on a wallet
    unspents            Get wallet unspents
    sendtoaddress       Create and send a transaction
    consolidate         Consolidate unspents in a wallet
    fanout              Fan out unspents in a wallet
    unlock              Unlock the session to allow transacting
    lock                Re-lock the session
    freeze              Freeze (time-lock) the current wallet
```

#### get
```bash
$ bgo wallet get 5a1341e7c8421dc90710673b3166bbd5
```

Use this command to view information on a wallet of the coin type the session coin is set to, and make that wallet the current session wallet.

```
Wallet:             5a1341e7c8421dc90710673b3166bbd5
Label:              Test Wallet 2 Unspents
Coin:               TBTC
Balance:            0.00406647 TBTC
Confirmed:          0.00406647 TBTC
Spendable:          0.00406647 TBTC
```

#### transfer
```bash
$ bgo wallet transfer 5a1341e7c8421dc90710673b3166bbd5
```

Use this command to view information on a transfer. You can pass in the transfer id or the txid.

```
Transfer:           5a555811a240c3e807d53b2ef0f50d94
Coin:               TBTC
TXID:               783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3
Date:               2018-01-10T00:10:51.781Z
Confirmations:      3021
State:              confirmed
```

#### transferlist
```bash
$ bgo wallet transferlist -l 3
```

It will print a list of transfers for the current session wallet.

```
INDEX  DATE                   TXID                                                                   AMOUNT         DESC   
0      2018-01-25T22:01:24Z   c345501773dad371366f9e3c4830710a208c74d3c53a901a80b7544de1b4067f       -0.00002955    Sent   
1      2018-01-25T22:01:24Z   dea34f07a288112f325978dfb2d3093d1b7ead5da9007b6a8ce208fec72b2409       -0.00017832    Sent   
2      2018-01-25T00:07:18Z   aadef18f4c7893bdb064ba2e8bf2d4fe6671f269ea99483f93c194de6c98df5a       -0.00006483    Sent   
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-l | --limit    | The number of transfers to fetch (defaults to 25)
-b | --batchGet | Enable batch fetching, will get limit transfers per page


#### unspents
```bash
$ bgo wallet unspents -l 3
```

It will print a list of unspents for the current session wallet.

```
INDEX  AMOUNT         ID                                                                     ADDRESS                                 
0      0.00020333     c345501773dad371366f9e3c4830710a208c74d3c53a901a80b7544de1b4067f:0     2N6yS5n1954FX4RPMiAWb2vRBKLRBsuFiPG     
1      0.00020332     c345501773dad371366f9e3c4830710a208c74d3c53a901a80b7544de1b4067f:1     2MxEt5YDRsFZ87jRX3PQ2BLDkjBg3T5ApyH     
2      0.00020332     c345501773dad371366f9e3c4830710a208c74d3c53a901a80b7544de1b4067f:2     2N9ArFPULomJxvcbKHBSM9qmhgFH1H2qJn9     
3      0.00020332     c345501773dad371366f9e3c4830710a208c74d3c53a901a80b7544de1b4067f:3     2N7NzLtDYrwM2DjZBBn8Th47ABvNjU3Ptq3     
4      0.00020332     c345501773dad371366f9e3c4830710a208c74d3c53a901a80b7544de1b4067f:4     2NEYp7yMdCxUqDsXxhSHWqm2az8wYcXqAbB     
Count (this list): 5
Total amount (this list): 0.00101661
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-l | --limit        | The number of wallets to fetch (defaults to 25)
-b | --batchGet     | Enable batch fetching, will get limit transfers per page
-s | --minValue      | Ignore unspents smaller than this amount of satoshis
-m | --maxValue      | Ignore unspents larger than this amount of satoshis
-g | --minHeight    | Ignore unspents confirmed at a lower block height than the given minHeight
-c | --minConfirms  | Ignores unspents that have fewer than the given confirmations

```bash
$ bgo wallet unspents -l 3 -s 10000 -m 200000000 -g 23412 -c 1 -b
```

#### unlock
```bash
$ bgo wallet unlock 0000000
```

Use this command to unlock the current session wallet to allow spending funds with other commands.


#### lock
```bash
$ bgo wallet lock
```

Use this command to lock the current session wallet so funds can't leave the wallet until another unlock.

#### freeze
```bash
$ bgo wallet freeze -d 100
```

Use this command to freeze current session wallet so funds can't leave the wallet until the freeze is over.

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-d | --duration | The number of seconds to freeze the wallet for.
 | --confirm | Use this flag to skip the confirmation step

#### sendtoaddress
```bash
$ bgo wallet sendtoaddress
```

It will send funds to the destination address.

```
Destination address: 2N6yS5n1954FX4RPMiAWb2vRBKLRBsuFiPG
Amount: 120000
Wallet Passphrase: ***********************************

Confirm Wallet Passphrase: ***********************************

Optional message: 
Please confirm sending 120000 to 2N6yS5n1954FX4RPMiAWb2vRBKLRBsuFiPG

Type 'go' to confirm: go

txid: 7c37859387fdf647b3987debffb4950875bec48d9c9d4ed5aaa11e8edc3d38e1
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-d | --dest | Destination Address
-a | --amount | Amount to
-p | --walletPassphrase | The passphrase to be used to decrypt the user key on this wallet
-o | --otp | Two factor authentication code
-b | --message | Optional message
 | --confirm | Use this flag to skip the confirmation step
-f | --feeRate | The feeRate to use for the transaction
-m | --maxValue | Ignore unspents larger than this amount of satoshis
-s | --minValue | Ignore unspents smaller than this amount of satoshis
-g | --minHeight | Ignore unspents confirmed at a lower block height than the given minHeight
-c | --minConfirms | Ignores unspents that have fewer than the given confirmations
-e | --enforceMinConfirmsForChange | Only use change outputs that have at least minConfirms 
-t | --targetWalletUnspents | The desired count of unspents in the wallet. If the wallet’s current unspent count is lower than the target, up to 8 change outputs will be added to the transaction. 
-n | --noSplitChange | Set this flag to disable automatic change splitting for purposes of unspent management.


#### consolidate
```bash
$ bgo wallet consolidate
```

It will create, sign and send a consolidation transaction for the current session wallet.

```
Wallet Passphrase: ***********************************

Confirm Wallet Passphrase: ***********************************

txid: 2c37859384fdd647b3987debffb4950875bec4ad9c9d4ed5aaa11e8edc3d38e1
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-n | --numUnspentsToMake | Number of outputs created by the consolidation transaction (Defaults to 1)
-l | --limit | 	Number of unspents to select (Defaults to 25, Max is 200)
-p | --walletPassphrase | The passphrase to be used to decrypt the user key on this wallet
-f | --feeRate | The feeRate to use for the transaction
-m | --maxValue | Ignore unspents larger than this amount of satoshis
-s | --minValue | Ignore unspents smaller than this amount of satoshis
-g | --minHeight | Ignore unspents confirmed at a lower block height than the given minHeight
-c | --minConfirms | Ignores unspents that have fewer than the given confirmations
-e | --enforceMinConfirmsForChange | Only use change outputs that have at least minConfirms 
-a | --feeTxConfirmTarget | Fee rate is automatically chosen by targeting a transaction confirmation in this number of blocks (Only available on BTC, feeRate takes precedence if also set)
-r | --maxFeePercentage | Maximum percentage of an unspent’s value to be used for fees. Cannot be combined with minValue


#### fanout
```bash
$ bgo wallet fanout
```

It will create, sign and send a fanout transaction for the current session wallet.

```
Wallet Passphrase: ***********************************

Confirm Wallet Passphrase: ***********************************

txid: 5c3f859384fd2647b3987debffb4950875bec4ad9c9d4ed5ac718e8edc3d38e1
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-n | --numUnspentsToMake | Number of unspents you want to create in the transaction. They will all be almost the same size. (Default 200, Max 300)
-l | --maxNumInputsToUse | 	Number of unspents you want to use in the fanout transaction (Default 20, Max 80)
-p | --walletPassphrase | The passphrase to be used to decrypt the user key on this wallet
-f | --feeRate | The feeRate to use for the transaction
-m | --maxValue | Ignore unspents larger than this amount of satoshis
-s | --minValue | Ignore unspents smaller than this amount of satoshis
-g | --minHeight | Ignore unspents confirmed at a lower block height than the given minHeight
-c | --minConfirms | Ignores unspents that have fewer than the given confirmations
-e | --enforceMinConfirmsForChange | Only use change outputs that have at least minConfirms 
-a | --feeTxConfirmTarget | Fee rate is automatically chosen by targeting a transaction confirmation in this number of blocks (Only available on BTC, feeRate takes precedence if also set)
-r | --maxFeePercentage | Maximum percentage of an unspent’s value to be used for fees. Cannot be combined with minValue

## Address Commands
```
$ bgo address -h
usage: bgo address [-h] {get,list,newaddress} ...

Optional arguments:
  -h, --help            Show this help message and exit.

address commands:
  {get,list,newaddress}
    get                 view the information of an address
    list                list addresses on the current wallet
    newaddress          Create a new receive address for the current wallet
```

#### get
```bash
$ bgo address get 2MuUXDK2sRKdBTrruXi9kZNBymrAmBsqhez
```

Use this command to view information on an address on the current session wallet.

```json
{
  "id": "5a1341e7c8421dc90710673fa655e20a",
  "address": "2MuUXDK2sRKdBTrruXi9kZNBymrAmBsqhez",
  "chain": 0,
  "index": 0,
  "coin": "tbtc",
  "wallet": "5a1341e7c8421dc90710673b3166bbd5",
  "coinSpecific": {
    "redeemScript": "5221029001bd3…"
  },
  "balance": {
    "updated": "2017-11-28T18:28:16.786Z",
    "numTx": 2,
    "numUnspents": 0,
    "totalReceived": 130000000,
    "totalSent": 130000000
  }
}
```


#### list
```bash
$ bgo address list -l 3
```

It will print a list of addresses for the current session wallet.

```
INDEX  ADDRESS                                  ID                                  CHAIN
0      2MuUXDK2sRKdBTrruXi9kZNBymrAmBsqhez      5a1341e7c8421dc90710673fa655e20a    0    
1      2N1rbp3VZbqvDpmHAGS9gfoh6c4pLeWYQJt      5a1342d9aaf5f7c8079d206ac6285f5a    0    
2      2N3khVXnj37FzWczpiyUATbFxdKVWNCLBKF      5a1daa9c20bea6b8070b2a42e9f89c32    1    
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-l | --limit    | The number of addresses to fetch (defaults to 25)
-b | --batchGet | Enable batch fetching, will get limit transfers per page


#### newaddress
```bash
$ bgo address newaddress
```

It will create a new recieve address on the current session wallet.

```json
{
  "id": "5a6f9e0e031b47bd07c7aa6da02bdfa7",
  "address": "2NGBANAbyGu4GeHuv78p6675kJi3rTcGVz8",
  "chain": 0,
  "index": 5,
  "coin": "tbtc",
  "wallet": "5a1341e7c8421dc90710673b3166bbd5",
  "coinSpecific": {
    "redeemScript": "5221033102bf91…"
  },
  "keychains": [
    {
      "id": "5a1341cf5f98bed007d7a41aa60a8cfa",
      "users": [
        "543c11ed356d00cb7600000b98794503"
      ],
      "pub": "xpub661MyMwAqRbcGH8mVjYMKdrpjxaeqJEnFkN8yaGU…",
      "ethAddress": "0xfb9a4c2b3756d2a772ecf8254b02a582b9fd3f67",
      "encryptedPrv": "{\"iv\":\"/RFY54Qfj/yLPueY18M27g==\",\"v\":1,\"iter\":10000…"
    },
    {
      "id": "5a1341d05f98bed007d7a43effc3e391",
      "users": [
        "543c11ed356d00cb7600000b98794503"
      ],
      "pub": "xpub661MyMwAqRbcEdbchFu8Y8UBw6sVqQMDrDYrK8aB…",
      "ethAddress": "0x3539278f17043104fea42f005e97faddf3e60896",
      "encryptedPrv": "{\"iv\":\"F8VC8uq7ny4lLAXoi33y6A==\",\"v\":1,\"iter\":10000…"
    },
    {
      "id": "5a1341d05f98bed007d7a4422e36b919",
      "users": [
        "543c11ed356d00cb7600000b98794503"
      ],
      "pub": "xpub661MyMwAqRbcFeeMZtyLiqECMeek7QD6X9NLX2yd…",
      "ethAddress": "0xbf1019a84b6950652002529a7cc18a2fee8f0edf",
      "isBitGo": true
    }
  ]
}
```

There are also additional flags you can pass in.

short | long | description
--- | --- | ---
-c | --change | Set this flag to make the new address a change address


# Developing

For developers on bitgo-cli-v2, the following must be run in the installation directory before writing new code.
```bash
$ npm install
```

