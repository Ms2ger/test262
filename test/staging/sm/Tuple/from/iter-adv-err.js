// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
var items = {};
items[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new RangeError();
    }
  };
};

assertThrowsInstanceOf(function() {
  Tuple.from(items);
}, RangeError, 'Tuple.from(items) should throw');

