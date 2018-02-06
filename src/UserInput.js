const Q = require('q');
const read = require('read');
const readline = require('readline');
const _ = require('lodash');

/**
 * Instantiate a UserInput object
 * @param {Object} args The arguments being passed to the class
 */
const UserInput = function UserInput(args) {
  _.assign(this, args);
};

/**
 * Prompt the user for data
 * @param {string} question The question to prompt the user
 * @param {boolean} [required] Weather the data is required or not
 * @returns {Promise} returns a promise after entering the data into an object
 */
UserInput.prototype.prompt = function prompt(question, required) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const deferred = Q.defer();
  rl.setPrompt(question);
  rl.prompt();
  rl.on('line', function line(line) {
    line = line.trim();
    if (line || !required) {
      deferred.resolve(line);
      rl.close();
    } else {
      rl.prompt();
    }
  });
  return deferred.promise;
};

/**
 * Prompt the user for a password
 * @param {string} question The question to prompt the user
 * @param {boolean} [allowBlank] Weather or not the user can leave the field blank
 * @returns {function} returns a function asking for the password
 */
UserInput.prototype.promptPassword = function promptPassword(question, allowBlank) {
  const self = this;
  /**
   * Replace the chars the user types with *'s
   * @returns {string} returns the password
   */
  const internalPromptPassword = function internalPromptPassword() {
    const deferred = Q.defer();
    read({ prompt: question, silent: true, replace: '*' }, function handleRead(err, result) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(result);
      }
    });
    return deferred.promise;
  };

  // Ensure password not blank
  return internalPromptPassword()
  .then(function handlePassword(password) {
    if (password || allowBlank) {
      return password;
    }
    return self.promptPassword(question);
  });
};

/**
 * Get input from user into variable, with question as prompt
 * @param {string} name The name of the variable to asign the data
 * @param {string} question The question to prompt the user
 * @param {boolean} [required] Weather the data is required or not
 * @param {boolean} [defaultValue] The default value of the variable if the user does not enter anything
 * @returns {function} returns a function asking for the password
 */
UserInput.prototype.getVariable = function getVariable(name, question, required, defaultValue) {
  const self = this;
  return function internalGetVariable() {
    return Q().then(function checkVariable() {
      if (self[name]) {
        return;
      }
      return Q().then(function choosePrompt() {
        if (name === 'password' || name === 'passcode') {
          return self.promptPassword(question);
        } else {
          return self.prompt(question, required);
        }
      })
      .then(function assignVariable(value) {
        if (!value && defaultValue) {
          value = defaultValue;
        }
        self[name] = value;
      });
    });
  };
};

/**
 * Get input from user into variable, with question as prompt
 * @param {string} name The name of the variable to asign the data
 * @param {string} question The question to prompt the user
 * @param {boolean} [confirm] Weather or not to ask the user to confirm their password
 * @returns {function} returns a function asking for the password
 */
UserInput.prototype.getPassword = function getPassword(name, question, confirm) {
  const self = this;
  let password;

  return function internalGetPassword() {
    return Q().then(function checkVariable() {
      if (self[name]) {
        return;
      }
      return self.promptPassword(question)
      .then(function assignPassowrd(value) {
        password = value;
        if (confirm) {
          return self.promptPassword('Confirm ' + question, true);
        }
      })
      .then(function checkConformation(confirmation) {
        if (confirm && confirmation !== password) {
          console.log("passwords don't match -- try again");
          return self.getPassword(name, question, confirm)();
        } else {
          self[name] = password;
        }
      });
    });
  };
};

/**
 * Get input from user into variable, with question as prompt
 * @param {string} name The name of the variable to asign the data
 * @param {string} question The question to prompt the user
 * @param {boolean} [required] Weather the data is required or not
 * @param {number} [min] The minimum value the data entered can be
 * @param {number} [max] The maximum value the data entered can be
 * @returns {function} returns a function asking for the password
 */
UserInput.prototype.getIntVariable = function getIntVariable(name, question, required, min, max) {
  const self = this;
  return function internalGetIntVariable() {
    return self.getVariable(name, question, required)()
    .then(function checkInt() {
      const value = parseInt(self[name], 10);
      // eslint-disable-next-line
      if (value != self[name]) {
        throw new Error('integer value required');
      }
      if (value < min) {
        throw new Error('value must be at least ' + min);
      }
      if (value > max) {
        throw new Error('value must be at most ' + max);
      }
      self[name] = value;
    })
    .catch(function catchIntError(err) {
      console.log(err.message);
      delete self[name];
      if (required) {
        return self.getIntVariable(name, question, required, min, max)();
      }
    });
  };
};

module.exports = UserInput;
