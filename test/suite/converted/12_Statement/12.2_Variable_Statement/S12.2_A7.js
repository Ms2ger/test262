// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VariableDeclaration within "for" statement is allowed
 *
 * @id: S12.2_A7;
 * @section: 12.2;
 * @description: Declaring variable within "for" statement;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
	infor_var = infor_var;
}catch(e){
	$ERROR('#1: Variable declaration inside "for" loop is admitted');
};
//
//////////////////////////////////////////////////////////////////////////////

for (;;){
    break;
    var infor_var;
}

