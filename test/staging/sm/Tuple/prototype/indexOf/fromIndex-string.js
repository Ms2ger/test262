// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is a string containing a negative number
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
assert.sameValue(#[0, true, 2].indexOf(true, "-1"), -1, '#[0, true, 2].indexOf(true, "-1")');
assert.sameValue(#[0, 1, true].indexOf(true, "-1"), 2, '#[0, 1, true].indexOf(true, "-1")');

