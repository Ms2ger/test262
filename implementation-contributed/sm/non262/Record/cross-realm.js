// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js]
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/

const realm = newGlobal();

const realm_record = realm.eval(`Record({ x: 1, y: 2 })`);

assert.sameValue(realm_record === #{ x: 1, y: 2 }, true);

