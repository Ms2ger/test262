// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @id: S11.8.2_A2.4_T3;
 * @section: 11.8.2;
 * @description: Checking with undeclarated variables;
 */

//CHECK#1
try {
  x > (x = 1);
  $ERROR('#1.1: x > (x = 1) throw ReferenceError. Actual: ' + (x > (x = 1)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x > (x = 1) throw ReferenceError. Actual: ' + (e));  
  }
}

//CHECK#2
if ((y = 1) > y !== false) {
  $ERROR('#2: (y = 1) > y === false');
}


