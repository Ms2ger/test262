// Copyright (C) 2016 the V8 project authors. All rights reserved.
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
var TuplePrototype = Tuple.prototype;

assert.sameValue(TuplePrototype[Symbol.toStringTag], "Tuple");

