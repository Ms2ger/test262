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

desc = Object.getOwnPropertyDescriptor(Tuple.isTuple, "name");
assert.sameValue(desc.value, "isTuple");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

