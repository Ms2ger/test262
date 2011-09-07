// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production Block can't be inside of expression
 *
 * @id: S12.1_A4_T1;
 * @section: 12.1;
 * @description: Checking if execution of "y={__func}()" fails;
 * @negative;
 */

function __func(){};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
y={__func}();
//
//////////////////////////////////////////////////////////////////////////////

