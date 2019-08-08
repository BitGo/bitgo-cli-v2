#!/usr/bin/env node

const ArgumentParser = require('argparse').ArgumentParser;
const bitgo = require('bitgo');
const pjson = require('../package.json');
const BGCLI_VERSION = pjson.version;

const Promise = require('bluebird');
const co = Promise.coroutine;
const _ = require('lodash');
_.string = require('underscore.string');
const EventEmitter = require('events').EventEmitter;
const getIP = Promise.promisify(require('external-ip')());
require('colors');
const crypto = require('crypto');

const Session = require('./session');
const UserInput = require('./UserInput');
const UserCommands = require('./user');
const WalletCommands = require('./wallet');
const AddressCommands = require('./address');

const userCommands = new UserCommands();
const walletCommands = new WalletCommands();
const addressCommands = new AddressCommands();

// Todo: update as we add new coins and erc support
const validCoins = {
  bitcoin: new Set(['btc', 'bch', 'eth', 'ltc', 'btg', 'rmg', 'xrp', 'algo']),
  testnet: new Set(['tbtc', 'tbch', 'teth', 'tltc', 'tbtg', 'trmg', 'txrp', 'talgo'])
};

/**
 * Check if the coin is valid for the current environment
 * @param {string} coin The coin to test
 * @returns {boolean} If the coin belongs to the current environments network
 */
const isValidCoin = function isValidCoin(coin) {
  return (validCoins[bitgo.getNetwork()].has(coin));
};

/**
 * Print out data with padding
 * @param {string} name The name of the data field
 * @param {string} value The data to show
 * @param {Integer} [width] The number of spaces to add
 */
const field = function field(name, value, width) {
  width = width || 20;
  console.log(_.string.rpad(name + ': ', width) + value);
};

/**
 * Print out data as a spaced JSON object
 * @param {Object} obj The data to print
 */
const printJSON = function printJSON(obj) {
  console.log(JSON.stringify(obj, null, 2));
};

/**
 * Get and return the session wallet
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.session.coin The current session coin
 * @param {string} opts.session.wallet.id The current session wallet id
 * @returns {Wallet} A wallet object for the current session
 */
const getSessionWallet = co(function *getSessionWallet(opts) {
  const coin = opts.session.coin;
  const basecoin = opts.bitgo.coin(coin);
  const wallets = basecoin.wallets();
  const wallet = yield wallets.get({ id: opts.session.wallet.id });
  return wallet;
});

/**
 * Check if a wallet has been set in the current session
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.session.wallet The current session wallet info
 */
const ensureWallet = function ensureWallet(opts) {
  if (!opts.session.wallet || !opts.session.wallet.id) {
    throw new Error('No wallet set');
  }
};

/**
 * Check if the current user is logged in
 * @param {Object} opts The arguments being passed to the function
 */
const ensureAuthenticated = co(function *ensureAuthenticated(opts) {
  try {
    yield opts.bitgo.me();
  } catch (err) {
    throw new Error('Not logged in');
  }
});

/**
 * Return a cleaned up object with out parser added keys and null data fields
 * @param {Object} args The arguments to be cleaned
 * @returns {Object} An object that no longer has fields added by the parser, and no longer has null or undefined data
 */
const correctParams = function correctParams(args) {
  const params = _.omit(args, ['env', 'json', 'cmd', 'cmd2', 'batchGet']);
  // eslint-disable-next-line eqeqeq
  Object.keys(params).forEach((key) => (params[key] == null) && delete params[key]);
  return params;
};

/**
 * Assign the helper function to the opts variable so other files can use them
 * @param {Object} opts The object to assign the helper functions to
 */
function applyHelperFunctions(opts) {
  opts.isValidCoin = isValidCoin;
  opts.field = field;
  opts.printJSON = printJSON;
  opts.ensureWallet = ensureWallet;
  opts.getSessionWallet = getSessionWallet;
  opts.ensureAuthenticated = ensureAuthenticated;
  opts.correctParams = correctParams;
}

/**
 * Instantiate an BGCL (bitgo command line) object
 */
const BGCL = function BGCL() {
};

/**
 * Instantiate an BGCL (bitgo command line) object
 * @returns {Object} The parser object containing all commands and subcommands
 */
BGCL.prototype.createArgumentParser = function createArgumentParser() {
  /* eslint-disable no-unused-vars */
  const parser = new ArgumentParser({
    version: BGCLI_VERSION,
    addHelp: true,
    description: 'BitGo Command Line Tool'
  });
  parser.addArgument(
    ['-e', '--env'], {
      help: 'BitGo environment to use: prod (default) or test. Can also be set with the BITGO_ENV environment variable.'
    }
  );
  parser.addArgument(['-j', '--json'], { action: 'storeTrue', help: 'output JSON (if available)' });

  const subparsers = parser.addSubparsers({
    title: 'subcommands',
    dest: 'cmd'
  });

  // login
  const login = subparsers.addParser('login', {
    addHelp: true,
    help: 'Sign in to BitGo'
  });
  login.addArgument(['-u', '--username'], { help: 'the account email' });
  login.addArgument(['-p', '--password'], { help: 'the account password' });
  login.addArgument(['-o', '--otp'], { help: 'the 2-step verification code' });

  // logout
  const logout = subparsers.addParser('logout', { help: 'Sign out of BitGo' });

  // token
  const token = subparsers.addParser('token', {
    addHelp: true,
    help: 'Get or set the current auth token'
  });
  token.addArgument(['token'], { nargs: '?', help: 'the token to set' });

  // coin type
  const coin = subparsers.addParser('coin', { help: 'Set a coin type for v2 admin routes (e.g. tbtc, btc, trmg, rmg, teth, eth, txrp, xrp, tltc, ltc)' });
  coin.addArgument(['coinType'], { nargs: '?', help: 'name of the coin to use, select from (e.g. tbtc, btc, trmg, rmg, teth, eth, txrp, xrp, tltc, ltc)' });

  // fee info
  const fee = subparsers.addParser('fee', { help: 'get fee info for a given coin, uses session coin by default' });
  fee.addArgument(['-c', '--coin'], { help: 'the coin type to use instead of the current session coin' });
  fee.addArgument(['-n', '--numBlocks'], { type: 'int', help: 'the number of blocks out to get the fee estimate' });

  /**
   * User Commands
   */
  const user = subparsers.addParser('user', { help: 'User operations (use user -h to see commands)' });
  const userCommands = user.addSubparsers({
    title: 'user commands',
    dest: 'cmd2'
  });

  const userGet = userCommands.addParser('get', { help: 'Get the current user' });

  const userWalletsList = userCommands.addParser('wallets', { help: 'List your wallets of type session coin' });
  userWalletsList.addArgument(['-l', '--limit'], { help: 'number of wallets to fetch per batch' });
  userWalletsList.addArgument(['-b', '--batchGet'], { action: 'storeTrue', nargs: 0, help: 'enable wallet batch get for user' });


  /**
   * Wallet Commands
   */
  const wallet = subparsers.addParser('wallet', { help: 'Wallet operations (use wallet -h to see commands)' });
  const walletCommands = wallet.addSubparsers({
    title: 'wallet commands',
    dest: 'cmd2'
  });

  // wallet get
  const walletGet = walletCommands.addParser('get', { help: 'Get info on and set the current session wallet by its id' });
  walletGet.addArgument(['id'], { nargs: '?', help: 'the wallet id' });

  const walletTransfer = walletCommands.addParser('transfer', { help: 'Get information of a transfer on a wallet' });
  walletTransfer.addArgument(['id'], { help: 'the txid or transfer id to lookup' });

  // txlist
  const walletTxList = walletCommands.addParser('transferlist', { help: 'Get transfers on a wallet' });
  walletTxList.addArgument(['-l', '--limit'], { type: 'int', help: 'number of records to return' });
  walletTxList.addArgument(['-b', '--batchGet'], { action: 'storeTrue', nargs: 0, help: 'enable transfer batch get' });

  const walletUnspents = walletCommands.addParser('unspents', { help: 'Get wallet unspents' });
  walletUnspents.addArgument(['-l', '--limit'], { type: 'int', help: 'number of unspents to fetch' });
  walletUnspents.addArgument(['-s', '--minValue'], { type: 'int', help: 'ignore unspents smaller than this amount of satoshis' });
  walletUnspents.addArgument(['-m', '--maxValue'], { type: 'int', help: 'ignore unspents larger than this amount of satoshis' });
  walletUnspents.addArgument(['-g', '--minHeight'], { type: 'int', help: 'ignore unspents confirmed at a lower block height than the given minHeight' });
  walletUnspents.addArgument(['-c', '--minConfirms'], { type: 'int', help: 'ignores unspents that have fewer than the given confirmations' });
  walletUnspents.addArgument(['-b', '--batchGet'], { action: 'storeTrue', nargs: 0, help: 'enable unspent batch get' });

  const walletSendToAddress = walletCommands.addParser('sendtoaddress', { help: 'Create and send a transaction' });
  walletSendToAddress.addArgument(['-d', '--address'], { help: 'the destination address' });
  walletSendToAddress.addArgument(['-a', '--amount'], { help: 'the amount in BTC' });
  walletSendToAddress.addArgument(['-p', '--walletPassphrase'], { help: 'the wallet password' });
  walletSendToAddress.addArgument(['-o', '--otp'], { help: 'the 2-step verification code' });
  walletSendToAddress.addArgument(['-b', '--message'], { help: 'optional private comment' });
  walletSendToAddress.addArgument(['--confirm'], { action: 'storeConst', constant: 'go', help: 'skip interactive confirm step -- be careful!' });
  walletSendToAddress.addArgument(['-f', '--feeRate'], { type: 'int', help: 'set fee rate in satoshis per KB' });
  walletSendToAddress.addArgument(['-m', '--maxValue'], { type: 'int', help: 'maximum size unspent in BTC to consolidate' });
  walletSendToAddress.addArgument(['-s', '--minValue'], { type: 'int', help: 'minimum size unspent in satoshis to consolidate' });
  walletSendToAddress.addArgument(['-g', '--minHeight'], { type: 'int', help: 'minimum height of unspents on the block chain to use' });
  walletSendToAddress.addArgument(['-c', '--minConfirms'], { type: 'int', help: 'only select unspents with at least this many confirmations' });
  walletSendToAddress.addArgument(['-e', '--enforceMinConfirmsForChange'], { action: 'storeTrue', nargs: 0, help: 'Should change outputs should respect the minConfirms parameter' });
  walletSendToAddress.addArgument(['-t', '--targetWalletUnspents'], { type: 'int', help: 'The desired count of unspents in the wallet' });
  walletSendToAddress.addArgument(['-n', '--noSplitChange'], { action: 'storeTrue', nargs: 0, help: 'Set to true to disable automatic change splitting for purposes of unspent management.' });

  // Consolidate unspents
  const consolidateUnspents = walletCommands.addParser('consolidate', { help: 'Consolidate unspents in a wallet' });
  consolidateUnspents.addArgument(['-n', '--numUnspentsToMake'], { type: 'int', help: 'consolidate unspents into this many unspents (defaults to 1)' });
  consolidateUnspents.addArgument(['-l', '--limit'], { type: 'int', help: 'Number of unspents to select (Defaults to 25, Max is 200)' });
  consolidateUnspents.addArgument(['-f', '--feeRate'], { type: 'int', help: 'set fee rate in satoshis per KB' });
  consolidateUnspents.addArgument(['-a', '--feeTxConfirmTarget'], { type: 'int', help: 'set fee based on estimates for getting confirmed within this number of blocks' });
  consolidateUnspents.addArgument(['-m', '--maxValue'], { type: 'int', help: 'maximum size unspent in BTC to consolidate' });
  consolidateUnspents.addArgument(['-s', '--minValue'], { type: 'int', help: 'minimum size unspent in satoshis to consolidate' });
  consolidateUnspents.addArgument(['-g', '--minHeight'], { type: 'int', help: 'minimum height of unspents on the block chain to use' });
  consolidateUnspents.addArgument(['-p', '--password'], { type: 'string', help: 'password to use for signing' });
  consolidateUnspents.addArgument(['-c', '--minConfirms'], { type: 'int', help: 'only select unspents with at least this many confirmations' });
  consolidateUnspents.addArgument(['-e', '--enforceMinConfirmsForChange'], { action: 'storeTrue', nargs: 0, help: 'Should change outputs should respect the minConfirms parameter' });
  consolidateUnspents.addArgument(['-r', '--maxFeePercentage'], { type: 'int', help: 'Maximum percentage of an unspent’s value to be used for fees. Cannot be combined with minValue' });

  // Fanout unspents maxNumInputsToUse
  const fanoutUnspents = walletCommands.addParser('fanout', { help: 'Fan out unspents in a wallet' });
  fanoutUnspents.addArgument(['-n', '--numUnspentsToMake'], { type: 'int', help: 'fanout unspents into this many unspents (Default 200, Max 300)' });
  fanoutUnspents.addArgument(['-l', '--maxNumInputsToUse'], { type: 'int', help: 'Number of unspents to select (Defaults to 20, Max is 80)' });
  fanoutUnspents.addArgument(['-f', '--feeRate'], { type: 'int', help: 'set fee rate in satoshis per KB' });
  fanoutUnspents.addArgument(['-a', '--feeTxConfirmTarget'], { type: 'int', help: 'set fee based on estimates for getting confirmed within this number of blocks' });
  fanoutUnspents.addArgument(['-m', '--maxValue'], { type: 'int', help: 'maximum size unspent in BTC to consolidate' });
  fanoutUnspents.addArgument(['-s', '--minValue'], { type: 'int', help: 'minimum size unspent in satoshis to consolidate' });
  fanoutUnspents.addArgument(['-g', '--minHeight'], { type: 'int', help: 'minimum height of unspents on the block chain to use' });
  fanoutUnspents.addArgument(['-p', '--walletPassphrase'], { type: 'string', help: 'password to use for signing' });
  fanoutUnspents.addArgument(['-c', '--minConfirms'], { type: 'int', help: 'only select unspents with at least this many confirmations' });
  fanoutUnspents.addArgument(['-e', '--enforceMinConfirmsForChange'], { action: 'storeTrue', nargs: 0, help: 'Should change outputs should respect the minConfirms parameter' });
  fanoutUnspents.addArgument(['-r', '--maxFeePercentage'], { type: 'int', help: 'Maximum percentage of an unspent’s value to be used for fees. Cannot be combined with minValue' });

  // unlock
  const unlock = walletCommands.addParser('unlock', { help: 'Unlock the session to allow transacting' });
  unlock.addArgument(['otp'], { nargs: '?', help: 'the 2-step verification code' });

  // lock
  const lock = walletCommands.addParser('lock', { help: 'Re-lock the session' });

  // freezewallet
  const freezeWallet = walletCommands.addParser('freeze', { help: 'Freeze (time-lock) the current wallet' });
  freezeWallet.addArgument(['-d', '--duration'], { help: 'the duration in seconds for which to freeze the wallet' });
  freezeWallet.addArgument(['--confirm'], { action: 'storeConst', constant: 'go', help: 'skip interactive confirm step -- be careful!' });


  /**
   * Address Commands
   */
  const address = subparsers.addParser('address', { help: 'Address operations (use address -h to see commands)' });
  const addressCommands = address.addSubparsers({
    title: 'address commands',
    dest: 'cmd2'
  });

  // get address
  const getAddress = addressCommands.addParser('get', { help: 'view the information of an address' });
  getAddress.addArgument(['id'], { nargs: '?', help: 'the address or id to look up' });

  // list addresses
  const listAddresses = addressCommands.addParser('list', { help: 'list addresses on the current wallet' });
  listAddresses.addArgument(['-l', '--limit'], { help: 'number of unspents to fetch' });
  listAddresses.addArgument(['-b', '--batchGet'], { action: 'storeTrue', nargs: 0, help: 'enable address batch get' });

  // newaddress
  const newAddress = addressCommands.addParser('newaddress', { help: 'Create a new receive address for the current wallet' });
  newAddress.addArgument(['-c', '--change'], { action: 'storeTrue', help: 'create a change address' });

  /**
   * New key
   */
  const newKey = subparsers.addParser('newkey', { help: 'Create a new key pair' });
  newKey.addArgument(['-c', '--coin'], { help: 'the coin type to use instead of the current session coin' });
  newKey.addArgument(['-s', '--seed'], { help: 'the seed in hexadecimal to generate the key pair for. Random by default' });

  /* eslint-enable no-unused-vars */
  return parser;
};

/**
 * Handle the coin command, to see or set the session coin
 * @param {object} opts The arguments being passed to the function
 * @param {string} opts.args.coinType The coin type to set the current session to
 */
BGCL.prototype.handleCoin = function handleCoin(opts) {
  const coinType = opts.args.coinType;

  if (!coinType) {
    opts.field('Session coin is currently set to', opts.session.coin.bold.green);
    return;
  }

  if (!isValidCoin(coinType)) {
    console.log(`Error: ${coinType} is an invalid cointype for selected environment -> ${opts.bitgo.getEnv()}`.red);
    return;
  }

  if (!opts.session.coin || opts.session.coin !== coinType) {
    opts.session.coin = coinType;
    opts.session.save();
  }
  opts.field('Session coin set to', opts.session.coin.bold.green);
};

/**
 * Handle the login command
 * @param {object} opts The arguments being passed to the function
 * @param {string} [opts.args.username] The email / username of the user
 * @param {string} [opts.args.password] The password of the user
 * @param {string} [opts.args.otp] The two factor auth code of the user
 */
BGCL.prototype.handleLogin = co(function *handleLogin(opts) {
  opts.bitgo.clear();
  const input = new UserInput(this.args);
  yield input.getVariable('username', 'Email: ')();
  yield input.getVariable('password', 'Password: ')();
  yield input.getVariable('otp', '2-Step Verification Code: ')();
  try {
    yield opts.bitgo.authenticate(input);
  } catch (err) {
    if (err.needsOTP) {
      throw new Error('Incorrect 2-step verification code.');
    }
    if (err.status === 401) {
      if (err.result.error === 'request_source_verification_pending') {
        throw new Error('IP address has not been verified');
      }
      throw new Error('Invalid login/password');
    }
    throw err;
  }
  let ip = '127.0.0.1';
  if (!['local', 'mock'].includes(opts.bitgo.getEnv())) {
    ip = yield getIP();
  }

  opts.session.user = opts.bitgo._user;
  opts.session.save();

  console.log('Logged in as ' + input.username + ' from ' + ip);
});

/**
 * Check if current session is using a long lived token and warn user if true
 * Used to prevent a user from changing or possibly invalidating (in the case
 * of a call to logout) the long-lived token.
 *
 * @param {object} opts The arguments being passed to the function
 * @param {string} warning The warning message to show to the user
 */
BGCL.prototype.checkAndWarnOfLongLivedTokenChange = co(function *checkAndWarnOfLongLivedTokenChange(opts, warning) {
  const res = yield opts.bitgo.session();
  if (_.includes(_.keys(res), 'label')) {
    console.log(warning);
    const input = new UserInput(opts.args);
    yield input.getVariable('confirm', 'Type ' + '\'go\''.bold + ' to confirm: ')();
    if (input.confirm !== 'go') {
      throw new Error('Cancelling'.bold.red);
    }
  }
});

/**
 * Handle the logout command
 * @param {object} opts The arguments being passed to the function
 */
BGCL.prototype.handleLogout = co(function *handleLogout(opts) {
  const env = opts.bitgo.getEnv();
  yield this.checkAndWarnOfLongLivedTokenChange(opts, 'About to logout of a session with a longed-lived access token!\n' +
    'This will invalidate the long-lived access token, making it unusable in the future\n');
  yield opts.bitgo.logout();
  opts.session.clear(env);
  console.log('Logged out'.bold);
});

/**
 * Handle the token command, to see the current token or login using a token
 * @param {object} opts The arguments being passed to the function
 * @param {object} [opts.args.token] The token to login with
 */
BGCL.prototype.handleToken = co(function *handleToken(opts) {
  // If no token set, display current one
  if (!opts.args.token) {
    yield opts.ensureAuthenticated(opts);
    return opts.field('Current token is', opts.bitgo._token.bold.green);
  }

  try {
    opts.bitgo.clear();
    opts.bitgo._token = opts.args.token;
    const user = yield opts.bitgo.me();
    opts.session.user = user;
    opts.bitgo._user = user;
    opts.session.wallet = undefined;
    opts.session.save();
    console.log('Logged in as ' + user.username);
  } catch (err) {
    if (err.status === 401) {
      throw new Error('Invalid token');
    }
    throw err;
  }
});

/**
 * Handle the token command, to see the current token or login using a token
 * @param {object} opts The arguments being passed to the function
 * @param {string} [opts.args.coin] The coin to use instead of the session coin
 * @param {Integer} [opts.args.numBlocks] The number of blocks out to get the fee estimate
 */
BGCL.prototype.handleFee = co(function *handleFee(opts) {
  const coin = opts.args.coin || opts.session.coin;
  const params = opts.correctParams(opts.args);

  if (opts.args.coin) {
    if (!isValidCoin(opts.args.coin)) {
      throw new Error(`${coin} is an invalid cointype for selected environment -> ${opts.bitgo.getEnv()}`);
    }
    delete params.coin;
  }

  const feeInfo = yield opts.bitgo.coin(coin).feeEstimate(params);

  if (opts.args.json) {
    return opts.printJSON(feeInfo);
  }

  opts.field('feePerKb', feeInfo.feePerKb.toString().bold);
});

/**
 * Create a new key pair for the given key
 * @param {object} opts The arguments being passed to the function
 * @param {string} [opts.args.coin] The coin to use instead of the session coin
 */
BGCL.prototype.handleNewKey = co(function *handleFee(opts) {
  const coin = opts.args.coin || opts.session.coin;
  const params = opts.correctParams(opts.args);

  if (opts.args.coin) {
    if (!isValidCoin(opts.args.coin)) {
      throw new Error(`${coin} is an invalid cointype for selected environment -> ${opts.bitgo.getEnv()}`);
    }
    delete params.coin;
  }

  try {
    const seed = (opts.args.seed) ? Buffer.from(opts.args.seed, 'hex') : crypto.randomBytes(32);
    const newKey = opts.bitgo.coin(coin).generateKeyPair(seed);

    if (opts.args.json) {
      newKey.seed = seed.toString('hex');
      return opts.printJSON(newKey);
    }

    opts.field('Public Key', newKey.pub.toString().bold);
    opts.field('Private Key', newKey.prv.toString().bold);
    opts.field('Seed', seed.toString('hex').bold);
  } catch (err) {
    throw new Error('error generating new key. Invalid seed?');
  }
});

/**
 * Handle the command to run
 * @param {Object} opts The arguments being passed to the function
 * @param {string} opts.args.cmd The command to run
 */
BGCL.prototype.runCommandHandler = co(function *runCommandHandler(opts) {
  switch (opts.args.cmd) {
    case 'login':
      return this.handleLogin(opts);
    case 'logout':
      return this.handleLogout(opts);
    case 'token':
      return this.handleToken(opts);
    case 'wallet':
      return walletCommands.handleWallet(opts);
    case 'address':
      return addressCommands.handleAddress(opts);
    case 'user':
      return userCommands.handleUser(opts);
    case 'coin':
      return this.handleCoin(opts);
    case 'fee':
      return this.handleFee(opts);
    case 'newkey':
      return this.handleNewKey(opts);
    default:
      throw new Error('unknown command');
  }
});

/**
 * Run the command line tool, setup the bitgo and session objects for the commands to use
 * @param {Object} [args] The arguments being passed from the command line if simulated
 */
BGCL.prototype.run = co(function *run(args) {
  const self = this;
  this.parser = this.createArgumentParser();
  this.args = this.parser.parseArgs(args);

  // Setup BitGo for chosen environment
  const env = this.args.env || process.env.BITGO_ENV || 'prod';
  const userAgent = 'bitgocli/' + BGCLI_VERSION;
  this.bitgo = new bitgo.BitGo({ env: env, userAgent: userAgent });

  this.session = new Session(this.bitgo);
  this.session.load();

  // we dont want process.exit() to run during mocha unit tests, so if the env is mock, end silently, other wise call process.exit()
  const eventEmitter = new EventEmitter();
  eventEmitter.on('myExit', function myExit() {
    if (env !== 'mock') {
      process.exit();
    }
  });

  const opts = {
    args: self.args,
    bitgo: self.bitgo,
    session: self.session,
    eventEmitter: eventEmitter
  };

  applyHelperFunctions(opts);

  return Promise.try(function runCommand() {
    return self.runCommandHandler(opts);
  })
  .catch(function handleError(err) {
    console.error(err);
  });
});


exports = module.exports = BGCL;
