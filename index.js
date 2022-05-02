/**
 * Copyright 2022-present, NKDuy
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var factory = require('./factory');

var DULCET_ELEMENT_TYPE = (typeof Symbol === 'function' &&
  Symbol.for &&
  Symbol.for('dulcet.element')) ||
  0xeac7;

function isValidElement(object) {
  return typeof object === 'object' &&
    object !== null &&
    object.$$typeof === DULCET_ELEMENT_TYPE;
}

module.exports = factory(isValidElement);
