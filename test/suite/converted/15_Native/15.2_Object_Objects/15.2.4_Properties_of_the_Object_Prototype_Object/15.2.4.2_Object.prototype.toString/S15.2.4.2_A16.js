// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @id: S15.2.4.2_A16;
 * @section: 15.2.4.2;
 * @description: Let O be the result of calling ToObject passing the this value as the argument.;
 */

if (Object.prototype.toString.call('foo') !== "[object String]") {
  $ERROR('Let O be the result of calling ToObject passing the this ' +
         'value as the argument.');
}

