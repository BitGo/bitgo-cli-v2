const Promise = require('bluebird');
const co = Promise.coroutine;
const _ = require('lodash');
const columnify = require('columnify');

/**
 * Instantiate an UserCommands object
 */
const userCommands = function userCommands() {
};

/**
 * Handle the user sub-commands
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.args.cmd2 The command to run
 */
userCommands.prototype.handleUser = co(function *handleUser(opts) {
  switch (opts.args.cmd2) {
    case 'get':
      return this.handleUserGet(opts);
    case 'wallets':
      return this.handleUserWallets(opts);
    default:
      throw new Error('unknown command');
  }
});

/**
 * Get information on the logged in user in the session
 * @param {Object} opts The arguments being passed to the function
 */
userCommands.prototype.handleUserGet = co(function *handleUserGet(opts) {
  let user = opts.session.user;
  if (!user) {
    user = yield opts.bitgo.me();
    if (!user) {
      throw new Error('No current user set');
    }
    opts.session.user = user;
    opts.session.save();
  }

  // JSON output
  if (opts.args.json) {
    return opts.printJSON(user);
  }

  opts.field('Id'.bold, user.id);
  opts.field('Username'.bold, user.username);

});

/**
 * List wallets of type session coin for the current user
 * @param {Object} opts The arguments being passed to the function
 * @param {Integer} [opts.args.limit] The number of wallets to fetch
 * @param {boolean} [opts.args.batchGet] A boolean to decide to fetch batches of wallets
 */
userCommands.prototype.handleUserWallets = co(function *handleUserWallets(opts) {
  opts.ensureAuthenticated(opts);

  const coin = opts.session.coin;
  const batchGet = opts.args.batchGet;
  const limit = parseInt(opts.args.limit, 10) || 25;

  // Callback function for keyboard input
  // Waits for spacebar click to get more wallets, any other key will force quit
  let offset = 0; // used to update index when printing wallets
  let prevId; // used to query for next batch
  const self = this;
  const internalFetchWallets = co(function *internalFetchWallets(str, key) {
    if (key.name !== 'space') {
      opts.eventEmitter.emit('myExit');
    } else {
      const newPrevId = yield self.fetchUserWalletBatch(opts, coin, limit, prevId, offset);
      prevId = newPrevId;
      if (prevId && batchGet) {
        console.log(`Press space to get next ${limit} wallets (any other key exits)...`);
      } else {
        opts.eventEmitter.emit('myExit');
      }
      offset += limit;
    }
  });

  yield internalFetchWallets(' ', { name: 'space' }); // get and print first batch of wallets
  if (batchGet) {
    const readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', internalFetchWallets);
  }
});

/**
 * Fetch a batch of wallets
 * @param {Object} opts The arguments being passed to the function
 * @param {string} coin The coin type of the wallets to fetch
 * @param {Integer} limit The number of wallets to fetch
 * @param {string} prevId The previous batch id, used to get the next batch
 * @param {Integer} offset The number of wallets fetched, used to keep track of the index to print
 */
userCommands.prototype.fetchUserWalletBatch = co(function *fetchUserWalletBatch(opts, coin, limit, prevId, offset = 0) {
  const query = { prevId: prevId, limit: limit };

  const res = yield opts.bitgo.coin(opts.session.coin).wallets().list(query);

  let wallets = res.wallets.map(w => w._wallet);

  wallets = _(wallets).sortBy('balance').reverse().value();
  prevId = res.nextBatchPrevId;
  if (opts.args.json) {
    opts.printJSON(wallets);
  } else {
    yield this.printWalletList(opts, wallets, offset);
  }
  return prevId;
});

/**
 * Print a list of wallets
 * @param {Object} opts The arguments being passed to the function
 * @param {array} wallets The list of wallets to print
 * @param {Integer} offset The number of wallets fetched, used to keep track of the index to print
 */
userCommands.prototype.printWalletList = co(function *printWalletList(opts, wallets, offset = 0) {
  const columns = ['Index', 'ID', 'Label', 'Balance'];
  const config = {
    Index: { minWidth: 6 },
    ID: { minWidth: 36 },
    Label: { minWidth: 40 },
    Balance: { minWidth: 14 }
  };

  const rows = wallets.map(function getWalletInfo(wallet, index) {
    let balanceStr = '';

    if (wallet.balanceString) {
      balanceStr = opts.bitgo.coin(wallet.coin).baseUnitsToBigUnits(wallet.balanceString).replace(',', '');
    }

    const result = {
      Index: index + offset,
      ID: wallet.id,
      Label: _.string.prune(wallet.label, 29),
      Balance: balanceStr
    };

    return result;

  });

  const table = columnify(rows, {
    columns: columns,
    config: config
  });
  console.log(table);

});


module.exports = userCommands;
