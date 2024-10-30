// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%Tuple%.prototype-@@tostringtag
info: |
  8.2.3.4 %Tuple%.prototype [ @@toStringTag ]

  The initial value of Tuple.prototype[@@toStringTag] is the String value "Tuple".

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
features:
- Symbol.toStringTag
- Tuple
includes: [sm/non262-shell.js]
flags:
- noStrict
---*/

var TuplePrototype = Tuple.prototype;
var desc = Object.getOwnPropertyDescriptor(
  TuplePrototype, Symbol.toStringTag
);

assert.sameValue(desc.value, "Tuple");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(desc.set, undefined);
assert.sameValue(desc.get, undefined);

