// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is -0, Math.cos(x) is 1
 *
 * @id: S15.8.2.7_A3;
 * @section: 15.8.2.7;
 * @description: Checking if Math.cos(-0) is 1;
 */

// CHECK#1
var x = -0;
if (Math.cos(x) !== 1)
{
	$ERROR("#1: 'var x = -0; Math.cos(x) !== 1'");
}

