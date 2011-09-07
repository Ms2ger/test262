// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Array has property prototype
 *
 * @id: S15.4.3.1_A1;
 * @section: 15.4.3.1, 15.2.4.5;
 * @description: Checking use hasOwnProperty;
 */

//CHECK#1
if (Array.hasOwnProperty('prototype') !== true) {
	$FAIL('#1: Array.hasOwnProperty(\'prototype\') === true. Actual: ' + (Array.hasOwnProperty('prototype')));
}


