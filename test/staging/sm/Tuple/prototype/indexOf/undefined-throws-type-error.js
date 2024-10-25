// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf applied to undefined throws a TypeError
includes: [sm/non262-shell.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/

assertThrowsInstanceOf(function() {
  Tuple.prototype.indexOf.call(undefined);
}, TypeError);

assertThrowsInstanceOf(function() {
  Tuple.prototype.indexOf.call(null);
}, TypeError);

