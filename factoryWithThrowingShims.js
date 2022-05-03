/**
 * Copyright 2022-present, NKDuy
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('nkdjs/lib/emptyFunction');
var invariant = require('nkdjs/lib/invariant');
var DulcetPropTypesSecret = require('./lib/DulcetPropTypesSecret');

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === DulcetPropTypesSecret) {
      // It is still safe when called from Dulcet.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `@dulcetjs/prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them.'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var DulcetPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  DulcetPropTypes.checkPropTypes = emptyFunction;
  DulcetPropTypes.PropTypes = DulcetPropTypes;

  return DulcetPropTypes;
};
