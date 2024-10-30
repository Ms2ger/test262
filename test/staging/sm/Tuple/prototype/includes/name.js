// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.includes.name is "includes".
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
assert.sameValue(Tuple.prototype.includes.name, "includes");
var desc = Object.getOwnPropertyDescriptor(Tuple.prototype.includes, "name");

assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

