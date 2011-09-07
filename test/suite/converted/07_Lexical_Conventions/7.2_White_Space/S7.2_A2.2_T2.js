// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VERTICAL TAB (U+000B) may occur within strings
 *
 * @id: S7.2_A2.2_T2;
 * @section: 7.2, 7.8.4;
 * @description: Use real VERTICAL TAB;
 */

//CHECK#1
if ("string" !== "\u000Bstr\u000Bing\u000B") {
  $ERROR('#1: "string" === "\\u000Bstr\\u000Bing\\u000B"');
}

