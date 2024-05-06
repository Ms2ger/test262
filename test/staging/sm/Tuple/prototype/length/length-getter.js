// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-%tuple%.prototype.length
info: |
  get %Tuple%.prototype.length

  Tuple.prototype.length is an accessor property whose set accessor function is undefined. Its get accessor function performs the following steps:

  1. Let T be ? thisTupleValue(this value).
  2. Let size be the length of T.[[Sequence]].
  3. Return size.
features:
- Tuple
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
---*/
/* Section 8.2.3.2 */

let TuplePrototype = Tuple.prototype;
let desc = Object.getOwnPropertyDescriptor(TuplePrototype, "length");

assert.sameValue(typeof desc.get, "function");

assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(desc.set, undefined);

let values = [[#[1,2,3], 3], [#[1], 1], [#[], 0]];

for (pair of values) {
    let tup = pair[0];
    let len = pair[1];
    assert.sameValue(desc.get.call(tup), len);
    assert.sameValue(desc.get.call(Object(tup)), len);
    assert.sameValue(tup["length"], len);
}

assertThrowsInstanceOf(() => desc.get.call("monkeys"), TypeError, "get length method called on incompatible string");
assertThrowsInstanceOf(() => desc.get.call(new Object()), TypeError, "get length method called on incompatible Object");

