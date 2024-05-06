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
/* description: Tuple toSorted does cast values to String */

var toStringCalled = false;
Number.prototype.toString = function() {
  toStringCalled = true;
}

let sample = #[20, 100, 3];
let result = sample.toSorted();
assert.sameValue(toStringCalled, false);
assert.sameValue(result, #[100, 20, 3]);

