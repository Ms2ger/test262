// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x || y uses GetValue
 *
 * @id: S11.11.2_A2.1_T2;
 * @section: 11.11.2, 8.7.1;
 * @description: If GetBase(x) is null, throw ReferenceError;
 */

//CHECK#1
try {
  x || true;
  $ERROR('#1.1: x || true throw ReferenceError. Actual: ' + (x || true));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x || true throw ReferenceError. Actual: ' + (e));  
  }
}

