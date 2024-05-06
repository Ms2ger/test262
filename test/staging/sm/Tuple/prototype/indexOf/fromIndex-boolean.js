// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf when fromIndex is boolean
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
let a = #[1, 2, 3];

assert.sameValue(a.indexOf(1, true), -1);
assert.sameValue(a.indexOf(1, false), 0);

