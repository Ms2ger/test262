// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%Tuple%.prototype.map
description: |
  callbackfn arguments
info: |
  8.2.3.20 %Tuple%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  7. Repeat, while k < len,
  a. Let kValue be list[k].
  b. Let mappedValue be ? Call(callbackfn, thisArg, « kValue, k, T »).
  ...
features:
- Tuple
includes: [sm/non262-shell.js]
flags:
- noStrict
---*/
var sample = #[42,43,44];
var results = [];
var thisArg = ["monkeys", 0, "bunnies", 0];

sample.map(function() { results.push(arguments); return 0; }, thisArg);

assert.sameValue(results.length, 3);
assert.sameValue(thisArg.length, 4);

assert.sameValue(results[0].length, 3);
assert.sameValue(results[0][0], 42);
assert.sameValue(results[0][1], 0);
assert.sameValue(results[0][2], sample);

assert.sameValue(results[1].length, 3);
assert.sameValue(results[1][0], 43);
assert.sameValue(results[1][1], 1);
assert.sameValue(results[1][2], sample);

assert.sameValue(results[2].length, 3);
assert.sameValue(results[2][0], 44);
assert.sameValue(results[2][1], 2);
assert.sameValue(results[2][2], sample);

