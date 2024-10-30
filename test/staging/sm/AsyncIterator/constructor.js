// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  The AsyncIterator constructor is a built-in function.

  AsyncIterator is not enabled unconditionally
includes: [sm/non262-shell.js]
flags:
- noStrict
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/
assert.sameValue(typeof AsyncIterator, 'function');

