// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.setUTCMinutes property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @id: S15.9.5.33_A3_T3;
 * @section: 15.9.5.33;
 * @description: Checking DontEnum attribute;
 */

if (Date.prototype.setUTCMinutes.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.setUTCMinutes.length property has the attribute DontEnum');
}

for(x in Date.prototype.setUTCMinutes) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.setUTCMinutes.length has the attribute DontEnum');
  }
}


