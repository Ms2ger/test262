// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  `name` property of AsyncIterator.prototype.toArray.
includes: [sm/non262-shell.js]
flags:
- noStrict
features:
- AsyncIterator
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.toArray, 'name');
assert.sameValue(propDesc.value, 'toArray');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

