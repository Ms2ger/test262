// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: |
  %Iterator.prototype%.filter length value and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js, sm/non262-shell.js, sm/non262.js]
features:
- Iterator
- Symbol.iterator
flags:
- noStrict
---*/
//

assert.sameValue(Iterator.prototype.filter.length, 1);

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(Iterator.prototype.filter, 'length');
assert.sameValue(propertyDescriptor.value, 1);
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);

