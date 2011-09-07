// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The encodeURI property has not prototype property
 *
 * @id: S15.1.3.3_A5.6;
 * @section: 15.1.3.3;
 * @description: Checking encodeURI.prototype;
 */

//CHECK#1
if (encodeURI.prototype !== undefined) {
  $ERROR('#1: encodeURI.prototype === undefined. Actual: ' + (encodeURI.prototype));
}

