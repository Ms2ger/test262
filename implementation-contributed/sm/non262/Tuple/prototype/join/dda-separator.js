// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
features:
- IsHTMLDDA
- Tuple
includes: [sm/non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/

let dda = createIsHTMLDDA();

assert.sameValue(dda == null, true);
assert.sameValue(dda === null, false);

assert.sameValue(dda == undefined, true);
assert.sameValue(dda === undefined, false);

let tup = Tuple("A", "B");
assert.sameValue(tup.join(null), "A,B");
assert.sameValue(tup.join(undefined), "A,B");
assert.sameValue(tup.join(dda), "A" + dda.toString() + "B");

