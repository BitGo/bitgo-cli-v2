const Promise = require('bluebird');
const co = Promise.coroutine;
const _ = require('lodash');
const moment = require('moment');
const BigNumber = require('bignumber.js');
const columnify = require('columnify');
require('colors');

const UserInput = require('./UserInput');

/**
 * Instantiate a WalletCommands object
 */
const WalletCommands = function WalletCommands() {
};

/**
 * Handle the wallet sub-commands
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.args.cmd2 The command to run
 */
WalletCommands.prototype.handleWallet = co(function *handleWallet(opts) {
  switch (opts.args.cmd2) {
    case 'get':
      return this.handleWalletGet(opts);
    case 'transfer':
      return this.handleWalletTransfer(opts);
    case 'transferlist':
      return this.handleWalletTransfersList(opts);
    case 'unspents':
      return this.handleWalletUnspentsList(opts);
    case 'sendtoaddress':
      return this.handleWalletSendToAddress(opts);
    case 'unlock':
      return this.handleWalletUnlock(opts);
    case 'lock':
      return this.handleWalletLock(opts);
    case 'freeze':
      return this.handleWalletFreeze(opts);
    case 'consolidate':
      return this.handleWalletConsolidate(opts);
    case 'fanout':
      return this.handleWalletFanout(opts);
    default:
      return console.log('Unknown wallet command');
  }
});

/**
 * Get information on a wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.args.id The id to lookup
 */
WalletCommands.prototype.handleWalletGet = co(function *handleWalletGet(opts) {
  const coin = opts.session.coin;
  const id = opts.args.id;

  const coinObj = opts.bitgo.coin(coin);

  const walletObj = yield coinObj.wallets().get({ id: id });
  const wallet = walletObj._wallet;

  opts.session.wallet = wallet;
  opts.session.save();


  // JSON output
  if (opts.args.json) {
    return opts.printJSON(wallet);
  }

  console.log('');
  opts.field('Wallet', wallet.id);
  opts.field('Label', wallet.label);
  opts.field('Coin', _.toUpper(wallet.coin));

  opts.field('Balance', coinObj.baseUnitsToBigUnits(wallet.balanceString) + ' ' + _.toUpper(coin));
  opts.field('Confirmed', coinObj.baseUnitsToBigUnits(wallet.confirmedBalanceString) + ' ' + _.toUpper(coin));
  opts.field('Spendable', coinObj.baseUnitsToBigUnits(wallet.spendableBalanceString) + ' ' + _.toUpper(coin));
});

/**
 * Get information on a transfer
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.args.id The id to lookup
 */
WalletCommands.prototype.handleWalletTransfer = co(function *handleWalletTransfer(opts) {
  opts.ensureWallet(opts);

  const wallet = yield opts.getSessionWallet(opts);
  const transferId = opts.args.id;

  const transfer = yield wallet.getTransfer({ id: transferId });

  opts.session.transfer = transfer;
  opts.session.save();

  // JSON output
  if (opts.args.json) {
    return opts.printJSON(transfer);
  }


  console.log('');
  opts.field('Transfer', transfer.id);
  opts.field('Coin', _.toUpper(transfer.coin));
  opts.field('TXID', transfer.txid);
  opts.field('Date', transfer.date);
  opts.field('Confirmations', transfer.confirmations);
  opts.field('State', transfer.state);
});

/**
 * List transfers on the session wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {Integer} [opts.args.limit] The number of address to fetch
 * @param {boolean} [opts.args.batchGet] A boolean to decide to fetch batches of address
 */
WalletCommands.prototype.handleWalletTransfersList = co(function *handleWalletTransfersList(opts) {
  opts.ensureWallet(opts);

  yield opts.ensureAuthenticated(opts);

  const wallet = yield opts.getSessionWallet(opts);

  const coin = opts.session.coin;
  const batchGet = opts.args.batchGet;
  const limit = parseInt(opts.args.limit, 10) || 25;


  // Callback function for keyboard input
  // Waits for spacebar click to get more transfers, any other key will force quit
  let offset = 0; // used to update index when printing transfers
  let prevId; // used to query for next batch
  const self = this;

  const internalFetchTransfers = co(function *internalFetchTransfers(str, key) {
    if (key.name !== 'space') {
      opts.eventEmitter.emit('myExit');
    } else {
      const newPrevId = yield self.fetchTransferBatch(opts, coin, wallet, limit, prevId, offset);
      prevId = newPrevId;
      if (prevId && batchGet) {
        console.log(`Press space to get next ${limit} transfers (any other key exits)...`);
      } else {
        opts.eventEmitter.emit('myExit');
      }
      offset += limit;
    }
  });

  yield internalFetchTransfers(' ', { name: 'space' }); // get and print first batch of wallets
  if (batchGet) {
    const readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', internalFetchTransfers);
  }

});

/**
 * Fetch a batch of transfers
 * @param {Object} opts The arguments being passed to the function
 * @param {string} coin The coin type of the wallet
 * @param {Wallet} wallet The wallet object to use to fetch the addresses
 * @param {Integer} limit The number of address to fetch
 * @param {string} prevId The previous batch id, used to get the next batch
 * @param {Integer} offset The number of address fetched, used to keep track of the index to print
 */
WalletCommands.prototype.fetchTransferBatch = co(function *fetchTransferBatch(opts, coin, wallet, limit, prevId, offset = 0) {
  const query = { prevId: prevId, limit: limit };

  const res = yield wallet.transfers(query);

  const transfers = res.transfers;

  prevId = res.nextBatchPrevId;

  if (opts.args.json) {
    opts.printJSON(transfers);
    return prevId;
  }
  const bitgoCoin = opts.bitgo.coin(coin);

  const columns = ['Index', 'Date', 'TXID', 'Amount', 'Desc'];
  const config = {
    Index: { minWidth: 6 },
    Date: { minWidth: 22 },
    TXID: { minWidth: 70 },
    Amount: { minWidth: 14 },
    Desc: { minWidth: 7 }
  };

  const rows = transfers.map(function getTransferInfo(tx, index) {

    const value = new BigNumber(tx.valueString);
    let desc = 'unknown';
    if (value.isNegative()) {
      desc = 'Sent';
    } else {
      desc = 'Received';
    }

    const result = {
      Index: index + offset,
      Date: moment.utc(tx.date).format(),
      TXID: tx.txid,
      Amount: bitgoCoin.baseUnitsToBigUnits(tx.valueString),
      Desc: desc
    };

    return result;
  });

  const table = columnify(rows, {
    columns: columns,
    config: config
  });
  console.log(table);

  return prevId;
});

/**
 * List transfers on the session wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {Integer} [opts.args.limit] The number of address to fetch
 * @param {boolean} [opts.args.batchGet] A boolean to decide to fetch batches of address
 * @param {Integer} [opts.args.minValue] Ignore unspents smaller than this amount of satoshis
 * @param {Integer} [opts.args.maxValue] Ignore unspents larger than this amount of satoshis
 * @param {Integer} [opts.args.minHeight] Ignore unspents confirmed at a lower block height than the given minHeight
 * @param {Integer} [opts.args.minConfirms] Ignores unspents that have fewer than the given confirmations
 */
WalletCommands.prototype.handleWalletUnspentsList = co(function *handleWalletUnspentsList(opts) {
  opts.ensureWallet(opts);

  yield opts.ensureAuthenticated(opts);

  const wallet = yield opts.getSessionWallet(opts);

  const coin = opts.session.coin;
  const batchGet = opts.args.batchGet;
  const limit = parseInt(opts.args.limit, 10) || 25;


  // Callback function for keyboard input
  // Waits for spacebar click to get more unspents, any other key will force quit
  let offset = 0; // used to update index when printing unspents
  let prevId; // used to query for next batch
  const self = this;

  const internalFetchUnspents = co(function *internalFetchUnspents(str, key) {
    if (key.name !== 'space') {
      opts.eventEmitter.emit('myExit');
    } else {
      const newPrevId = yield self.fetchUnspentsBatch(opts, coin, wallet, limit, prevId, offset);
      prevId = newPrevId;
      if (prevId && batchGet) {
        console.log(`Press space to get next ${limit} unspents (any other key exits)...`);
      } else {
        opts.eventEmitter.emit('myExit');
      }
      offset += limit;
    }
  });

  yield internalFetchUnspents(' ', { name: 'space' }); // get and print first batch of wallets
  if (batchGet) {
    const readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', internalFetchUnspents);
  }

});

/**
 * Fetch a batch of transfers
 * @param {Object} opts The arguments being passed to the function
 * @param {string} coin The coin type of the wallet
 * @param {Wallet} wallet The wallet object to use to fetch the addresses
 * @param {Integer} limit The number of address to fetch
 * @param {string} prevId The previous batch id, used to get the next batch
 * @param {Integer} offset The number of address fetched, used to keep track of the index to print
 */
WalletCommands.prototype.fetchUnspentsBatch = co(function *fetchUnspentsBatch(opts, coin, wallet, limit, prevId, offset = 0) {
  const query = opts.correctParams(opts.args);
  query.prevId = prevId;
  query.limit = limit;

  const res = yield wallet.unspents(query);

  const unspents = res.unspents;

  prevId = res.nextBatchPrevId;

  if (opts.args.json) {
    opts.printJSON(unspents);
    return prevId;
  }

  const columns = ['Index', 'Amount', 'ID', 'Address'];
  const config = {
    Index: { minWidth: 6 },
    Amount: { minWidth: 14 },
    ID: { minWidth: 70 },
    Address: { minWidth: 40 }
  };


  const baseFactor = opts.bitgo.coin(coin).getBaseFactor();

  const rows = unspents.map(function getUnspentInfo(unspent, index) {

    const result = {
      Index: index + offset,
      Amount: unspent.value / baseFactor,
      ID: unspent.id,
      Address: unspent.address
    };

    return result;
  });

  const table = columnify(rows, {
    columns: columns,
    config: config
  });
  console.log(table);

  const balance = _(unspents).map('value').sum();
  console.log('Count (this list): ' + unspents.length);
  console.log('Total amount (this list): ' + balance / baseFactor);

  return prevId;
});


/**
 * Send the given value to the given address from the session wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {string} [opts.args.address] The address to send to
 * @param {Integer} [opts.args.amount] The amount to send
 * @param {string} [opts.args.walletPassphrase] The wallet passphrase
 * @param {string} [opts.args.message] The message to add to the transaction
 * @param {boolean} [opts.args.confirm] A boolean to skip the conformation step
 * @param {Integer} [opts.args.feeRate] The feeRate to use for the transaction
 * @param {Integer} [opts.args.minValue] Ignore unspents smaller than this amount of satoshis
 * @param {Integer} [opts.args.maxValue] Ignore unspents larger than this amount of satoshis
 * @param {Integer} [opts.args.minHeight] Ignore unspents confirmed at a lower block height than the given minHeight
 * @param {Integer} [opts.args.minConfirms] Ignores unspents that have fewer than the given confirmations
 * @param {boolean} [opts.args.enforceMinConfirmsForChange] Only use change outputs that have at least minConfirms
 * @param {Integer} [opts.args.targetWalletUnspents] The desired count of unspents in the wallet
 * @param {boolean} [opts.args.noSplitChange] Set this flag to disable automatic change splitting
 */
WalletCommands.prototype.handleWalletSendToAddress = co(function *handleWalletSendToAddress(opts) {
  opts.ensureWallet(opts);
  const input = new UserInput(opts.args);

  yield input.getVariable('address', 'Destination address: ', true)();
  yield input.getVariable('amount', 'Amount: ', true)();
  yield input.getPassword('walletPassphrase', 'Wallet Passphrase: ', true)();
  yield input.getVariable('message', 'Optional message: ')();

  const prefix = input.confirm ? 'Sending' : 'Please confirm sending';
  console.log(prefix + ' ' + input.amount.toString().bold + ' to ' + input.address.bold + '\n');
  yield input.getVariable('confirm', 'Type \'go\' to confirm: ')();
  if (input.confirm !== 'go') {
    console.log('Transaction canceled'.bold.red);
    return;
  }

  const params = opts.correctParams(input);

  const wallet = yield opts.getSessionWallet(opts);

  const tx = yield wallet.send(params);

  // JSON output
  if (opts.args.json) {
    return opts.printJSON(tx);
  }

  opts.field('txid'.bold, tx.txid);
});

/**
 * Unlock the current session wallet to allow sending
 * @param {Object} opts The arguments being passed to the function
 * @param {Integer} [opts.args.otp] The two factor auth code of the user
 */
WalletCommands.prototype.handleWalletUnlock = co(function *handleWalletUnlock(opts) {
  opts.ensureWallet(opts);

  const input = new UserInput(opts.args);

  yield input.getVariable('otp', '2-step Verification Code: ', true)();
  const unlockOptions = { otp: input.otp };

  yield opts.bitgo.unlock(unlockOptions);

  console.log('Unlocked session'.bold.green);

});

/**
 * Lock the current session wallet to disallow sending
 * @param {Object} opts The arguments being passed to the function
 */
WalletCommands.prototype.handleWalletLock = co(function *handleWalletLock(opts) {
  opts.ensureWallet(opts);

  yield opts.bitgo.lock();

  console.log('Locked session'.bold.green);
});

/**
 * Unlock the current session wallet to allow sending
 * @param {Object} opts The arguments being passed to the function
 * @param {Integer} [opts.args.duration] The number of seconds to freeze the wallet
 * @param {boolean} [opts.args.confirm] A boolean to skip the conformation step
 */
WalletCommands.prototype.handleWalletFreeze = co(function *handleWalletFreeze(opts) {
  opts.ensureWallet(opts);
  const wallet = yield opts.getSessionWallet(opts);

  const input = new UserInput(opts.args);

  yield input.getIntVariable('duration', 'Duration in seconds to freeze: ', true, 1, 1e8)();

  console.log();
  console.log("Please confirm you wish to freeze wallet '" + wallet.label().bold + "' for " + input.duration.toString().bold + ' seconds.');
  console.log('BitGo will not sign any transactions on this wallet until the freeze expires.');
  yield input.getVariable('confirm', 'Type ' + '\'go\''.bold + ' to confirm: ')();

  if (input.confirm !== 'go') {
    throw new Error('canceled'.red);
  }

  const result = yield wallet.freeze({ duration: input.duration });

  console.log('Wallet frozen until ' + result.expires);
});

/**
 * Send the given value to the given address from the session wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {string} [opts.args.walletPassphrase] The wallet passphrase
 * @param {Integer} [opts.args.numUnspentsToMake] Number of outputs created by the consolidation transaction
 * @param {Integer} [opts.args.limit] Number of unspents to select
 * @param {Integer} [opts.args.feeRate] The feeRate to use for the transaction
 * @param {Integer} [opts.args.minValue] Ignore unspents smaller than this amount of satoshis
 * @param {Integer} [opts.args.maxValue] Ignore unspents larger than this amount of satoshis
 * @param {Integer} [opts.args.minHeight] Ignore unspents confirmed at a lower block height than the given minHeight
 * @param {Integer} [opts.args.minConfirms] Ignores unspents that have fewer than the given confirmations
 * @param {boolean} [opts.args.enforceMinConfirmsForChange] Only use change outputs that have at least minConfirms
 * @param {Integer} [opts.args.feeTxConfirmTarget] Targeting confirmation in this number of blocks
 * @param {Integer} [opts.args.maxFeePercentage] Maximum percentage of an unspent’s value to be used for fees
 */
WalletCommands.prototype.handleWalletConsolidate = co(function *handleWalletConsolidate(opts) {
  opts.ensureWallet(opts);

  const params = opts.correctParams(opts.args);

  const input = new UserInput(opts.args);
  yield input.getPassword('walletPassphrase', 'Wallet Passphrase: ', true)();
  params.walletPassphrase = input.walletPassphrase;


  const wallet = yield opts.getSessionWallet(opts);

  const tx = yield wallet.consolidateUnspents(params);

  // JSON output
  if (opts.args.json) {
    return opts.printJSON(tx);
  }

  opts.field('txid'.bold, tx.txid);

});

/**
 * Send the given value to the given address from the session wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {string} [opts.args.walletPassphrase] The wallet passphrase
 * @param {Integer} [opts.args.numUnspentsToMake] Number of unspents you want to create in the transaction
 * @param {Integer} [opts.args.maxNumInputsToUse]Number of unspents you want to use in the fanout transaction
 * @param {Integer} [opts.args.feeRate] The feeRate to use for the transaction
 * @param {Integer} [opts.args.minValue] Ignore unspents smaller than this amount of satoshis
 * @param {Integer} [opts.args.maxValue] Ignore unspents larger than this amount of satoshis
 * @param {Integer} [opts.args.minHeight] Ignore unspents confirmed at a lower block height than the given minHeight
 * @param {Integer} [opts.args.minConfirms] Ignores unspents that have fewer than the given confirmations
 * @param {boolean} [opts.args.enforceMinConfirmsForChange] Only use change outputs that have at least minConfirms
 * @param {Integer} [opts.args.feeTxConfirmTarget] Targeting confirmation in this number of blocks
 * @param {Integer} [opts.args.maxFeePercentage] Maximum percentage of an unspent’s value to be used for fees
 */
WalletCommands.prototype.handleWalletFanout = co(function *handleWalletFanout(opts) {
  opts.ensureWallet(opts);

  const params = opts.correctParams(opts.args);

  const input = new UserInput(opts.args);
  yield input.getPassword('walletPassphrase', 'Wallet Passphrase: ', true)();
  params.walletPassphrase = input.walletPassphrase;


  const wallet = yield opts.getSessionWallet(opts);

  const tx = yield wallet.fanoutUnspents(params);

  // JSON output
  if (opts.args.json) {
    return opts.printJSON(tx);
  }

  opts.field('txid'.bold, tx.txid);
});


module.exports = WalletCommands;
