// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.setUTCMilliseconds property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @id: S15.9.5.29_A3_T1;
 * @section: 15.9.5.29;
 * @description: Checking ReadOnly attribute;
 */

x = Date.prototype.setUTCMilliseconds.length;
Date.prototype.setUTCMilliseconds.length = 1;
if (Date.prototype.setUTCMilliseconds.length !== x) {
  $ERROR('#1: The Date.prototype.setUTCMilliseconds.length has the attribute ReadOnly');
}


