// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype has the property "setDate"
 *
 * @id: S15.9.5_A36_T1;
 * @section: 15.9.5;
 * @description: The Date.prototype has the property "setDate";
 */

if(Date.prototype.hasOwnProperty("setDate") !== true){
  $ERROR('#1: The Date.prototype has the property "setDate"');
}


