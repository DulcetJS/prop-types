/**
 * Copyright 2022-present, NKDuy
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var DULCET_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('dulcet.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === DULCET_ELEMENT_TYPE;
  };

  // By explicitly using `@dulcetjs/prop-types` you are opting into new development behavior.
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `@dulcetjs/prop-types` you are opting into new production behavior.
  module.exports = require('./factoryWithThrowingShims')();
}
