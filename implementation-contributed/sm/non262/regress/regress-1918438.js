// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/

try {
    gcparam("nurseryEnabled", true);
} catch (e) {
    exc = e;
}
gczeal(4);
new Object();
assert.sameValue(exc.message.includes("Parameter value out of range"), true);
