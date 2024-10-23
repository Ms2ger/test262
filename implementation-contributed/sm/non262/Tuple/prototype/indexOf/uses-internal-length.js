// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - 'length' is own data property that overrides an inherited data property on an Tuple
includes: [sm/non262-shell.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
var target = #[];

Tuple.prototype.length = 0;

assert.sameValue(#[0, target].indexOf(target), 1, '#[0, target].indexOf(target)');

