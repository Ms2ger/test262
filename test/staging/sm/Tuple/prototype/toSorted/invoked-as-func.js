// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js]
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
var toSorted = Tuple.prototype.toSorted;

assert.sameValue(typeof toSorted, 'function');

assertThrowsInstanceOf(function() {
  toSorted();
}, TypeError, "toSorted invoked as function");

