// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "getUTCSeconds" is 0
 *
 * @id: S15.9.5.23_A2_T1;
 * @section: 15.9.5.23;
 * @description: The "length" property of the "getUTCSeconds" is 0;
 */

if(Date.prototype.getUTCSeconds.hasOwnProperty("length") !== true){
  $ERROR('#1: The getUTCSeconds has a "length" property');
}

if(Date.prototype.getUTCSeconds.length !== 0){
  $ERROR('#2: The "length" property of the getUTCSeconds is 0');
}


