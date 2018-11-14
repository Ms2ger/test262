// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --harmony-intl-segmenter

// test/intl402/Segmenter/constructor/constructor/newtarget-undefined.js 

// test/intl402/Segmenter/constructor/constructor/locales-invalid.js 

assertDoesNotThrow(() => new Intl.Segmenter(["sr"], {}));

assertDoesNotThrow(() => new Intl.Segmenter([], {}));

assertDoesNotThrow(() => new Intl.Segmenter(["fr", "ar"], {}));

assertDoesNotThrow(() => new Intl.Segmenter({ 0: "ja", 1: "fr" }, {}));

assertDoesNotThrow(() => new Intl.Segmenter({ 1: "ja", 2: "fr" }, {}));

assertDoesNotThrow(() => new Intl.Segmenter(["sr"]));

assertDoesNotThrow(() => new Intl.Segmenter());

// test/intl402/Segmenter/constructor/constructor/options-granularity-valid.js
// test/intl402/Segmenter/constructor/constructor/options-granularity-invalid.js
// test/intl402/Segmenter/constructor/constructor/options-lineBreakStyle-valid.js
// test/intl402/Segmenter/constructor/constructor/options-lineBreakStyle-invalid.js
// test/intl402/Segmenter/constructor/constructor/options-valid-combinations.js
// test/intl402/Segmenter/constructor/constructor/options-throwing-getters.js 
// test/intl402/Segmenter/constructor/constructor/options-order.js 
