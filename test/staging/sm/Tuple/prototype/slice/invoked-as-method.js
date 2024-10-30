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
var TuplePrototype = Tuple.prototype;

assert.sameValue(typeof TuplePrototype.slice, 'function');

assertThrowsInstanceOf(function() { TuplePrototype.slice() }, TypeError,
                       "value of TupleObject must be a Tuple");

