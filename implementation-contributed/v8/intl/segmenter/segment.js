// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --harmony-intl-segmenter

assertEquals("function", typeof Intl.Segmenter.prototype.segment);
// test/intl402/Segmenter/prototype/segment/length.js

let seg = new Intl.Segmenter("en", {granularity: "word"})
let res;

// test with 0 args
assertDoesNotThrow(() => res = seg.segment())
// test with 1 arg
assertDoesNotThrow(() => res = seg.segment("hello"))
assertEquals("hello", res.next().value.segment);
// test with 2 args
assertDoesNotThrow(() => res = seg.segment("hello world"))
assertEquals("hello", res.next().value.segment);

// test/intl402/Segmenter/prototype/segment/segment-tostring.js
