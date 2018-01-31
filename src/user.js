const Promise = require('bluebird');
const co = Promise.coroutine;
const _ = require('lodash');
const columnify = require('columnify');

const userCommands = function() {

};

userCommands.prototype.handleUser = co(function *(opts) {
  switch (opts.args.cmd2) {
    case 'get':
      return this.handleUserGet(opts);
    case 'wallets':
      return this.handleUserWallets(opts);
    default:
      throw new Error('unknown command');
  }
});

userCommands.prototype.handleUserGet = co(function *(opts) {
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

userCommands.prototype.handleUserWallets = co(function *(opts) {
  opts.ensureAuthenticated(opts);

  const coin = opts.session.coin;
  const batchGet = opts.args.batchGet;
  const limit = parseInt(opts.args.limit, 10) || 25;

  // Callback function for keyboard input
  // Waits for spacebar click to get more wallets, any other key will force quit
  let offset = 0; // used to update index when printing wallets
  let prevId; // used to query for next batch of wallets
  const self = this;
  const internalFetchWallets = co(function *(str, key) {
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

userCommands.prototype.fetchUserWalletBatch = co(function *(opts, coin, limit, prevId, offset = 0) {
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


userCommands.prototype.printWalletList = co(function *(opts, wallets, offset = 0) {
  const columns = ['Index', 'ID', 'Label', 'Balance'];
  const config = {
    Index: { minWidth: 6 },
    ID: { minWidth: 36 },
    Label: { minWidth: 40 },
    Balance: { minWidth: 14 }
  };

  const rows = wallets.map(function (wallet, index) {
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
