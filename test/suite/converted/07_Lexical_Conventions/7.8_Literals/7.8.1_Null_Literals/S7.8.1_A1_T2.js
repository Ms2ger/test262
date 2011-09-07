// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Literal :: NullLiteral
 *
 * @id: S7.8.1_A1_T2;
 * @section: 7.8.1;
 * @description: Check RegExp("0").exec("1") === null;
 */

//CHECK#1
if (RegExp("0").exec("1") !== null) {
  $ERROR('#1: RegExp("0").exec("1") === null');
}  
 

