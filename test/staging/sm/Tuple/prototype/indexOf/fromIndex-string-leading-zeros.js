// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' which is a string containing a number with leading zeros
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
var target = #[];

assert.sameValue(#[0, 1, target, 3, 4].indexOf(target, "0003.10"), -1, '#[0, 1, target, 3, 4].indexOf(target, "0003.10")');
assert.sameValue(#[0, 1, 2, target, 4].indexOf(target, "0003.10"), 3, '#[0, 1, 2, target, 4].indexOf(target, "0003.10")');

