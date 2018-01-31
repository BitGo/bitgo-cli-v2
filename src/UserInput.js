const Q = require('q');
const read = require('read');
const readline = require('readline');
const _ = require('lodash');

const UserInput = function(args) {
  _.assign(this, args);
};

// Prompt the user for input
UserInput.prototype.prompt = function(question, required) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const deferred = Q.defer();
  rl.setPrompt(question);
  rl.prompt();
  rl.on('line', function(line) {
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

// Prompt the user for password input
UserInput.prototype.promptPassword = function(question, allowBlank) {
  const self = this;
  const internalPromptPassword = function() {
    const deferred = Q.defer();
    read({ prompt: question, silent: true, replace: '*' }, function(err, result) {
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
    .then(function(password) {
      if (password || allowBlank) {
        return password;
      }
      return self.promptPassword(question);
    });
};

// Get input from user into variable, with question as prompt
UserInput.prototype.getVariable = function(name, question, required, defaultValue) {
  const self = this;
  return function() {
    return Q().then(function() {
      if (self[name]) {
        return;
      }
      return Q().then(function() {
        if (name === 'password' || name === 'passcode') {
          return self.promptPassword(question);
        } else {
          return self.prompt(question, required);
        }
      })
        .then(function(value) {
          if (!value && defaultValue) {
            value = defaultValue;
          }
          self[name] = value;
        });
    });
  };
};

UserInput.prototype.getPassword = function(name, question, confirm) {
  const self = this;
  let password;

  return function() {
    return Q().then(function() {
      if (self[name]) {
        return;
      }
      return self.promptPassword(question)
        .then(function(value) {
          password = value;
          if (confirm) {
            return self.promptPassword('Confirm ' + question, true);
          }
        })
        .then(function(confirmation) {
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


UserInput.prototype.getIntVariable = function(name, question, required, min, max) {
  const self = this;
  return function() {
    return self.getVariable(name, question, required)()
      .then(function() {
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
      .catch(function(err) {
        console.log(err.message);
        delete self[name];
        if (required) {
          return self.getIntVariable(name, question, required, min, max)();
        }
      });
  };
};

module.exports = UserInput;
