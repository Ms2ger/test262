// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property LOG2E of the Math Object has the attribute ReadOnly
 *
 * @id: S15.8.1.4_A4;
 * @section: 15.8.1.4;
 * @description: Checking if Math.LOG2E property has the attribute ReadOnly;
 * @strict_only;
 * @strict_mode_negative;
 */

// CHECK#1
var x = Math.LOG2E;
Math.LOG2E = 1;
if (Math.LOG2E !== x) {
  $ERROR('#1: Math.LOG2E hasn\'t ReadOnly: \'x = Math.LOG2E;Math.LOG2E = 1;Math.LOG2E === x\'');
}

