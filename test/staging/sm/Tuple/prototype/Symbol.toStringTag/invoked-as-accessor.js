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
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
---*/

var TuplePrototype = Tuple.prototype;

assert.sameValue(TuplePrototype[Symbol.toStringTag], "Tuple");

