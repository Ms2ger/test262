// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Multi line comment can contain NO-BREAK SPACE (U+00A0)
 *
 * @id: S7.2_A4.5_T2;
 * @section: 7.2, 7.4;
 * @description: Use real NO-BREAK SPACE;
 */

/*CHECK#1*/
var x = 0;
/* multi line comment x = 1;*/
if (x !== 0) {
  $ERROR('#1: var x = 0; /* multi line comment x = 1;*/ x === 0. Actual: ' + (x));
}

