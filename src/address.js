const Promise = require('bluebird');
const co = Promise.coroutine;
const columnify = require('columnify');
require('colors');

const AddressCommands = function() {

};

AddressCommands.prototype.handleAddress = co(function *(opts) {
  switch (opts.args.cmd2) {
    case 'get':
      return this.handleAddressGet(opts);
    case 'list':
      return this.handleAddressList(opts);
    case 'newaddress':
      return this.handleNewAddress(opts);
    default:
      return console.log('Unknown wallet command');
  }
});

AddressCommands.prototype.handleAddressGet = co(function *(opts) {
  opts.ensureWallet(opts);
  const wallet = yield opts.getSessionWallet(opts);

  const address = yield wallet.getAddress({ address: opts.args.id });
  opts.printJSON(address);
});

AddressCommands.prototype.handleAddressList = co(function *(opts) {
  opts.ensureWallet(opts);

  yield opts.ensureAuthenticated(opts);

  const wallet = yield opts.getSessionWallet(opts);

  const coin = opts.session.coin;
  const batchGet = opts.args.batchGet;
  const limit = parseInt(opts.args.limit, 10) || 25;


  // Callback function for keyboard input
  // Waits for spacebar click to get more wallets, any other key will force quit
  let offset = 0; // used to update index when printing wallets
  let prevId; // used to query for next batch of wallets
  const self = this;

  // const prev = yield self.fetchAddressBatch(opts, coin, wallet, limit, prevId, offset);

  const internalFetchAddresses = co(function *(str, key) {
    if (key.name !== 'space') {
      opts.eventEmitter.emit('myExit');
    } else {
      const newPrevId = yield self.fetchAddressBatch(opts, coin, wallet, limit, prevId, offset);
      prevId = newPrevId;
      if (prevId && batchGet) {
        console.log(`Press space to get next ${limit} addresses (any other key exits)...`);
      } else {
        opts.eventEmitter.emit('myExit');
      }
      offset += limit;
    }
  });

  yield internalFetchAddresses(' ', { name: 'space' }); // get and print first batch of wallets
  if (batchGet) {
    const readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', internalFetchAddresses);
  }

});

AddressCommands.prototype.fetchAddressBatch = co(function *(opts, coin, wallet, limit, prevId, offset = 0) {
  const query = { prevId: prevId, limit: limit };

  const res = yield wallet.addresses(query);

  const addresses = res.addresses;

  prevId = res.nextBatchPrevId;

  if (opts.args.json) {
    opts.printJSON(addresses);
    return prevId;
  }

  const columns = ['Index', 'Address', 'Id', 'Chain'];
  const config = {
    Index: { minWidth: 6 },
    Address: { minWidth: 40 },
    Id: { minWidth: 35 },
    Chain: { minWidth: 1 }
  };

  const rows = addresses.map(function(address, index) {

    const result = {
      Index: index + offset,
      Address: address.address,
      Id: address.id,
      Chain: address.chain
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

AddressCommands.prototype.handleNewAddress = co(function *(opts) {
  opts.ensureWallet(opts);
  const wallet = yield opts.getSessionWallet(opts);

  const params = {
    chain: opts.args.change ? 1 : 0
  };
  const newAddress = yield wallet.createAddress(params);

  opts.printJSON(newAddress);
});


module.exports = AddressCommands;
