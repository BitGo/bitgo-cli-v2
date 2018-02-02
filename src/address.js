const Promise = require('bluebird');
const co = Promise.coroutine;
const columnify = require('columnify');
require('colors');

/**
 * Instantiate an AddressCommands object
 */
const AddressCommands = function AddressCommands() {
};

/**
 * Handle the address sub-commands
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.args.cmd2 The command to run
 */
AddressCommands.prototype.handleAddress = co(function *handleAddress(opts) {
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

/**
 * Get information on an address in the session wallet based on the address or id passed in.
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.args.id The id or address to lookup
 */
AddressCommands.prototype.handleAddressGet = co(function *handleAddressGet(opts) {
  opts.ensureWallet(opts);
  const wallet = yield opts.getSessionWallet(opts);

  const address = yield wallet.getAddress({ address: opts.args.id });
  opts.printJSON(address);
});

/**
 * List address on the session wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {Integer} [opts.args.limit] The number of address to fetch
 * @param {boolean} [opts.args.batchGet] A boolean to decide to fetch batches of address
 */
AddressCommands.prototype.handleAddressList = co(function *handleAddressList(opts) {
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

  const internalFetchAddresses = co(function *internalFetchAddresses(str, key) {
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

/**
 * Fetch a batch of addresses
 * @param {Object} opts The arguments being passed to the function
 * @param {string} coin The coin type of the wallet
 * @param {Wallet} wallet The wallet object to use to fetch the addresses
 * @param {Integer} limit The number of address to fetch
 * @param {string} prevId The previous batch id, used to get the next batch
 * @param {Integer} offset The number of address fetched, used to keep track of the index to print
 */
AddressCommands.prototype.fetchAddressBatch = co(function *fetchAddressBatch(opts, coin, wallet, limit, prevId, offset = 0) {
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

  const rows = addresses.map(function getAddressInfo(address, index) {

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

/**
 * Generate a new address on the current session wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {boolean} [opts.args.change] A boolean to decide to create a change address
 */
AddressCommands.prototype.handleNewAddress = co(function *handleNewAddress(opts) {
  opts.ensureWallet(opts);
  const wallet = yield opts.getSessionWallet(opts);

  const params = {
    chain: opts.args.change ? 1 : 0
  };
  const newAddress = yield wallet.createAddress(params);

  opts.printJSON(newAddress);
});


module.exports = AddressCommands;
