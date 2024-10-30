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
var t = #[void 0];

assert.sameValue(#[1, null, void 0].flat(), #[1, null, undefined]);
assert.sameValue(#[1, #[null, void 0]].flat(), #[1, null, undefined]);
assert.sameValue(#[#[null, void 0], #[null, void 0]].flat(), #[null, undefined, null, undefined]);
assert.sameValue(#[1, #[null, t]].flat(1), #[1, null, t]);
assert.sameValue(#[1, #[null, t]].flat(2), #[1, null, undefined]);

