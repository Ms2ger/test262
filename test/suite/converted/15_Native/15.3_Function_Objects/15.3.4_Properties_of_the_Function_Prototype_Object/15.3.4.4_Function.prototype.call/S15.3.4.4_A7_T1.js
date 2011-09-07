// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function.prototype.call can't be used as [[create]] caller
 *
 * @id: S15.3.4.4_A7_T1;
 * @section: 15.3.4.4;
 * @description: Checking if creating "new Function.prototype.call" fails;
 */

try {
  var obj = new Function.prototype.call;
  $ERROR('#1: Function.prototype.call can\'t be used as [[create]] caller');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#1.1: Function.prototype.call can\'t be used as [[create]] caller');
  }
}

