// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf when fromIndex is floating point number
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
var a = #[1,2,3];

assert.sameValue(a.indexOf(3, 0.49), 2);
assert.sameValue(a.indexOf(1, 0.51), 0);
assert.sameValue(a.indexOf(1, 1.51), -1);

