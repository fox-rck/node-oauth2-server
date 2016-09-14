'use strict';

/**
 * Module dependencies.
 */

var crypto = require('crypto');
var randomBytes = require('bluebird').promisify(require('crypto').randomBytes);
var jwt = require('json-web-token');

/**
 * Export `TokenUtil`.
 */
var secret = 'TOPSECRETTTTT';
module.exports = {

  /**
   * Generate random token.
   */

  generateRandomToken: function() {
    return randomBytes(256).then(function(buffer) {
      console.log("##################### RICK")
      var payload = crypto
        .createHash('sha1')
        .update(buffer)
        .digest('hex');
      jwt.encode(secret, payload, function (err, token) {
        if (err) {
          return console.error(err.name, err.message);
        }
        return token
      });
    });
  }

};
