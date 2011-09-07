// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Expression in "do-while" IterationStatement is bracketed with braces
 *
 * @id: S12.6.1_A6_T5;
 * @section: 12.6.1;
 * @description: Checking if execution of "do{}while ''" fails;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
do break; while '';
//
//////////////////////////////////////////////////////////////////////////////

