// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
var itemsPoisonedIteratorValue = {};
var poisonedValue = {};
Object.defineProperty(poisonedValue, 'value', {
  get: function() {
    throw new RangeError();
  }
});
itemsPoisonedIteratorValue[Symbol.iterator] = function() {
  return {
    next: function() {
      return poisonedValue;
    }
  };
};

assertThrowsInstanceOf(function() {
  Tuple.from(itemsPoisonedIteratorValue);
}, RangeError, 'Tuple.from(itemsPoisonedIteratorValue) throws');

