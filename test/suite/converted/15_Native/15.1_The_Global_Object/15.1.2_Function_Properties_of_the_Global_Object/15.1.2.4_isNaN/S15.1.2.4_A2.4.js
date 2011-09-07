// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of isNaN is 1
 *
 * @id: S15.1.2.4_A2.4;
 * @section: 15.1.2.4;
 * @description: isNaN.length === 1;
 */

//CHECK#1
if (isNaN.length !== 1) {
  $ERROR('#1: isNaN.length === 1. Actual: ' + (isNaN.length));
} 


