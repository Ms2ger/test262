/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [sm/non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
function test(fn, thisv) {
  var message;
  try {
    fn.call(thisv);
  } catch (e) {
    message = e.message;
  }

  assert.sameValue(/^\w+ method called on incompatible.+/.test(message), true);
  assert.sameValue(message.includes("std_"), false);
}

for (var thisv of [null, undefined, false, true, 0, ""]) {
  test(Map.prototype.values, thisv);
  test(Map.prototype.keys, thisv);
  test(Map.prototype.entries, thisv);
  test(Map.prototype[Symbol.iterator], thisv);
}

