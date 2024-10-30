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

var desc = Object.getOwnPropertyDescriptor(Tuple, "isTuple");
assert.sameValue(desc.value, Tuple.isTuple);
assert.sameValue(desc.writable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

