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

assert.sameValue(isConstructor(Tuple.prototype.slice), false);

assertThrowsInstanceOf(() => {
  let t = #[1];
  new t.slice();
}, TypeError, '`let t = #[1]; new t.slice()` throws TypeError');

