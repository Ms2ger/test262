// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is an Object, which has an own valueOf method
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
---*/
var fromIndex = {
  valueOf: function() {
    return 1;
  }
};


assert.sameValue(#[0, true].indexOf(true, fromIndex), 1, '#[0, true].indexOf(true, fromIndex)');

