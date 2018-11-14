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

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "sentence",
            lineBreakStyle: "normal"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "sentence",
            lineBreakStyle: "strict"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "sentence",
            lineBreakStyle: "loose"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "word",
            lineBreakStyle: "normal"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "word",
            lineBreakStyle: "strict"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "word",
            lineBreakStyle: "loose"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "grapheme",
            lineBreakStyle: "normal"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "grapheme",
            lineBreakStyle: "strict"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "grapheme",
            lineBreakStyle: "loose"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "line",
            lineBreakStyle: "loose"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "line",
            lineBreakStyle: "normal"
        })
);

assertDoesNotThrow(
    () =>
        new Intl.Segmenter(["sr"], {
            granularity: "line",
            lineBreakStyle: "strict"
        })
);

// test/intl402/Segmenter/constructor/constructor/options-throwing-getters.js 
// test/intl402/Segmenter/constructor/constructor/options-order.js 
