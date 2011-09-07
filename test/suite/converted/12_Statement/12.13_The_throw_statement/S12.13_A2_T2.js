// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1 evaluates Expression
 *
 * @id: S12.13_A2_T2;
 * @section: 12.13;
 * @description: Throwing null;
 */

// CHECK#1
try{
  throw null;
}
catch(e){
  if (e!==null) $ERROR('#1: Exception === null. Actual:  Exception ==='+ e  );
}

