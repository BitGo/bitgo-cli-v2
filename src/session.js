const fs = require('fs');

function getUserHome() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

const BITGO_DIR = getUserHome() + '/.bg';

function jsonFilename(name) {
  return BITGO_DIR + '/' + name + '.json';
}

function loadJSONFile(name) {
  try {
    const data = fs.readFileSync(jsonFilename(name), { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (e) {
    return undefined;
  }
}

function saveJSONFile(name, data) {
  if (!fs.existsSync(BITGO_DIR)) {
    fs.mkdirSync(BITGO_DIR, 0o700);
  }
  data = JSON.stringify(data, null, 2);
  fs.writeFileSync(jsonFilename(name), data, { encoding: 'utf8', mode: 0o600 });
}

const Session = function(bitgo) {
  this.bitgo = bitgo;
  this.user = undefined;
  this.enterprise = undefined;
  this.wallet = undefined;
  this.transferId = undefined;
  this.coin = undefined;
  this.policy = undefined;
  this.pendingApproval = undefined;
};

Session.prototype.toJSON = function() {
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

Session.prototype.save = function() {
  saveJSONFile(this.bitgo.getEnv(), this);
};

Session.prototype.load = function() {
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

Session.prototype.clear = function(env) {
  saveJSONFile(env, {});
};

module.exports = Session;
