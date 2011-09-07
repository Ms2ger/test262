// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function constructor has the property "prototype"
 *
 * @id: S15.3.3_A1;
 * @section: 15.3.3;
 * @description: Checking existence of the property "prototype";
 */

if(!Function.hasOwnProperty("prototype")){
  $ERROR('#1: The Function constructor has the property "prototype"');
}


