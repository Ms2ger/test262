// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The toString property of Array has not prototype property
 *
 * @id: S15.4.4.2_A4.6;
 * @section: 15.4.4.2;
 * @description: Checking Array.prototype.toString.prototype;
 */

//CHECK#1
if (Array.prototype.toString.prototype !== undefined) {
  $ERROR('#1: Array.prototype.toString.prototype === undefined. Actual: ' + (Array.prototype.toString.prototype));
}

