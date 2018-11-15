// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Segmenter.prototype.segment
description: Verifies the string coercion in the "segment" function of the Segmenter prototype object.
info: |
    Intl.Segmenter.prototype.segment( string )

    3. Let string be ? ToString(string).
features: [Intl.Segmenter]
---*/

const tests = [
  [undefined, "undefined"],
  [null, "null"],
  [true, "true"],
  [false, "false"],
  [12, "12"],
  [1.23, "1.23"],
  [["a", "b"], "a"],
  [{}, "["], // "[object Object]"
];

const segmenter = new Intl.Segmenter("en", { "granularity": "word" });
for (const [argument, expected] of tests) {
  const iterator = segmenter.segment(argument);
  const result = iterator.next().value;
  assert.sameValue(result.segment, expected, `Expected segment "${expected}", found "${result.segment}" for argument ${argument}`);
  assert(["word", "none"].includes(result.breakType), `Expected valid breakType, found "${result.breakType}" for argument ${argument}`);
  assert.sameValue(result.position, expected.length, `Expected position ${expected.length}, found ${result.position} for argument ${argument}`);
}

const symbol = Symbol();
assert.throws(TypeError, () => segmenter.segment(symbol));
