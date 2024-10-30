// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf returns -1 if fromIndex is greater than Tuple length
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
let a = #[1, 2, 3];

assert.sameValue(a.indexOf(1, 5), -1);
assert.sameValue(a.indexOf(1, 3), -1);
assert.sameValue(#[].indexOf(1, 0), -1);

