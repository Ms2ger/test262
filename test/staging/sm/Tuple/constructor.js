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

assertThrowsInstanceOf(
  () => new Tuple(),
  TypeError,
  "Tuple is not a constructor"
);

assert.sameValue(typeof Tuple(), "tuple");
assert.sameValue(typeof Object(Tuple()), "object");
assert.sameValue(Tuple() instanceof Tuple, false);
assert.sameValue(Object(Tuple()) instanceof Tuple, true);

assert.sameValue(Tuple().__proto__, Tuple.prototype);
assert.sameValue(Object(Tuple()).__proto__, Tuple.prototype);
assert.sameValue(Tuple.prototype.constructor, Tuple);

