// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "getTimezoneOffset" is 0
 *
 * @id: S15.9.5.26_A2_T1;
 * @section: 15.9.5.26;
 * @description: The "length" property of the "getTimezoneOffset" is 0;
 */

if(Date.prototype.getTimezoneOffset.hasOwnProperty("length") !== true){
  $ERROR('#1: The getTimezoneOffset has a "length" property');
}

if(Date.prototype.getTimezoneOffset.length !== 0){
  $ERROR('#2: The "length" property of the getTimezoneOffset is 0');
}


