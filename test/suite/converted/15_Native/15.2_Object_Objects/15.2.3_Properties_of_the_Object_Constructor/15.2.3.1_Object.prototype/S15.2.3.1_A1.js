// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Object.prototype property has the attribute ReadOnly
 *
 * @id: S15.2.3.1_A1;
 * @section: 15.2.3.1, 15.2.4;
 * @description: Checking if varying "Object.prototype" property fails;
 */

var obj = Object.prototype;
Object.prototype = function(){return "shifted";};

//CHECK#1
if (Object.prototype !== obj) {
  $ERROR('#1: the Object.prototype property has the attributes ReadOnly.');
}

//CHECK#2
try {
  Object.prototype();
  $ERROR('#2: the Object.prototype property has the attributes ReadOnly');
} catch (e) {
  ;
}

