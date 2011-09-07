// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production QuantifierPrefix :: * evaluates by returning the two results 0 and \infty
 *
 * @id: S15.10.2.7_A4_T15;
 * @section: 15.10.2.7;
 * @description: Execute /(\d*)\d(\d+)/.exec('1234567890') and check results;
 */

__executed = /(\d*)\d(\d+)/.exec('1234567890');

__expected = ["1234567890","12345678","0"];
__expected.index = 0;
__expected.input = '1234567890';

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(\\d*)\\d(\\d+)/.exec(\'1234567890\'); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(\\d*)\\d(\\d+)/.exec(\'1234567890\'); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(\\d*)\\d(\\d+)/.exec(\'1234567890\'); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(\\d*)\\d(\\d+)/.exec(\'1234567890\'); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


