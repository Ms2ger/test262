// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Changing property using "eval" statement containing "with" statement
 *
 * @id: S12.10_A4_T6;
 * @section: 12.10;
 * @description: Changing function property;
 * @strict_only;
 * @strict_mode_negative;
 */

this.p1 = 'a';
var myObj = {
  p1: function(){return 0;}, 
}
eval("with(myObj){p1=function(){return 1;}}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1() !== 1){
  $ERROR('#1: myObj.p1 === 1. Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.p1 === 'a'){
  $ERROR('#2: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////

