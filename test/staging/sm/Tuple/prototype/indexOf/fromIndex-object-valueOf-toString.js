// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is an object that has an own valueOf method that returns an object and toString method that returns a string
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
var toStringAccessed = false;
var valueOfAccessed = false;

var fromIndex = {
  toString: function() {
    toStringAccessed = true;
    return '1';
  },

  valueOf: function() {
    valueOfAccessed = true;
    return {};
  }
};

assert.sameValue(#[0, true].indexOf(true, fromIndex), 1, '#[0, true].indexOf(true, fromIndex)');
assert.sameValue(toStringAccessed, true);
assert.sameValue(valueOfAccessed, true);

