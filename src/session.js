const fs = require('fs');

/**
 * Get the users home location of their file system
 * @returns {string} The home location
 */
function getUserHome() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

const BITGO_DIR = getUserHome() + '/.bgo';

/**
 * Get the full file path
 * @param {string} name The name of the file, corresponds with the session env
 * @returns {string} The home location
 */
function jsonFilename(name) {
  return BITGO_DIR + '/' + name + '.json';
}

/**
 * Read in the session info form disk
 * @param {string} name The name of the file, corresponds with the session env
 * @returns {object} Return the session information
 */
function loadJSONFile(name) {
  try {
    const data = fs.readFileSync(jsonFilename(name), { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (e) {
    return undefined;
  }
}

/**
 * Save the session info to disk
 * @param {string} name The name of the file, corresponds with the session env
 * @param {object} data The data to save to disk
 */
function saveJSONFile(name, data) {
  if (!fs.existsSync(BITGO_DIR)) {
    fs.mkdirSync(BITGO_DIR, 0o700);
  }
  data = JSON.stringify(data, null, 2);
  fs.writeFileSync(jsonFilename(name), data, { encoding: 'utf8', mode: 0o600 });
}

/**
 * Instantiate a Session object
 * @param {Object} bitgo The bitgo instance
 */
const Session = function Session(bitgo) {
  this.bitgo = bitgo;
  this.user = undefined;
  this.enterprise = undefined;
  this.wallet = undefined;
  this.transferId = undefined;
  this.coin = undefined;
  this.policy = undefined;
  this.pendingApproval = undefined;
};

/**
 * Returns the current session info
 * @returns {object} Return the session information
 */
Session.prototype.toJSON = function toJSON() {
  return {
    bitgo: this.bitgo,
    coin: this.coin,
    user: this.user,
    enterprise: this.enterprise,
    wallet: this.wallet,
    transferId: this.transferId,
    pendingApproval: this.pendingApproval,
    policy: this.policy
  };
};

/**
 * Saves the current session
 */
Session.prototype.save = function save() {
  saveJSONFile(this.bitgo.getEnv(), this);
};

/**
 * Read in the session info form disk into a session object
 */
Session.prototype.load = function load() {
  const session = loadJSONFile(this.bitgo.getEnv());
  if (session) {
    if (session.bitgo) {
      this.bitgo.fromJSON(session.bitgo);
    }
    this.enterprise = session.enterprise;
    if (session.wallet) {
      this.wallet = session.wallet;
    }
    if (session.transferId) {
      this.transferId = session.transferId;
    }
    if (session.user && this.bitgo) {
      this.user = session.user;
    }
    if (session.pendingApproval) {
      this.pendingApproval = session.pendingApproval;
    }
    if (session.policy) {
      this.policy = session.policy;
    }
    if (session.coin) {
      this.coin = session.coin;
    }
  }
};

/**
 * Clear the session info in disk by overwriting it with an empty object
 * @param {string} env The env to clear, corresponds with name of the file
 */
Session.prototype.clear = function clear(env) {
  saveJSONFile(env, {});
};

module.exports = Session;
