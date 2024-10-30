// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is a string containing -Infinity
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
assert.sameValue(#[true].indexOf(true, "-Infinity"), 0, '#[true].indexOf(true, "-Infinity")');

