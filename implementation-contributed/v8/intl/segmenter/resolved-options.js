// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --harmony-intl-segmenter

let segmenter = new Intl.Segmenter([], { granularity: "line" });
// The default lineBreakStyle is 'normal'
assertEquals("normal", segmenter.resolvedOptions().lineBreakStyle);

segmenter = new Intl.Segmenter();
assertEquals(undefined, segmenter.resolvedOptions().lineBreakStyle);

// The default granularity is 'grapheme'
assertEquals("grapheme", segmenter.resolvedOptions().granularity);

assertEquals(
    undefined,
    new Intl.Segmenter(["sr"], { lineBreakStyle: "strict" }).resolvedOptions()
        .lineBreakStyle
);

assertEquals(
    "grapheme",
    new Intl.Segmenter(["sr"], { lineBreakStyle: "strict" }).resolvedOptions()
        .granularity
);

assertEquals(
    undefined,
    new Intl.Segmenter(["sr"], { lineBreakStyle: "normal" }).resolvedOptions()
        .lineBreakStyle
);

assertEquals(
    "grapheme",
    new Intl.Segmenter(["sr"], { lineBreakStyle: "normal" }).resolvedOptions()
        .granularity
);

assertEquals(
    undefined,
    new Intl.Segmenter(["sr"], { lineBreakStyle: "loose" }).resolvedOptions()
        .lineBreakStyle
);

assertEquals(
    "grapheme",
    new Intl.Segmenter(["sr"], { lineBreakStyle: "loose" }).resolvedOptions()
        .granularity
);

assertEquals(
    "word",
    new Intl.Segmenter(["sr"], { granularity: "word" }).resolvedOptions()
        .granularity
);

assertEquals(
    undefined,
    new Intl.Segmenter(["sr"], { granularity: "word" }).resolvedOptions()
        .lineBreakStyle
);

assertEquals(
    "grapheme",
    new Intl.Segmenter(["sr"], { granularity: "grapheme" }).resolvedOptions()
        .granularity
);

assertEquals(
    undefined,
    new Intl.Segmenter(["sr"], { granularity: "grapheme" }).resolvedOptions()
        .lineBreakStyle
);

assertEquals(
    "sentence",
    new Intl.Segmenter(["sr"], { granularity: "sentence" }).resolvedOptions()
        .granularity
);

assertEquals(
    undefined,
    new Intl.Segmenter(["sr"], { granularity: "sentence" }).resolvedOptions()
        .lineBreakStyle
);

assertEquals(
    "line",
    new Intl.Segmenter(["sr"], { granularity: "line" }).resolvedOptions()
        .granularity
);

assertEquals(
    "normal",
    new Intl.Segmenter(["sr"], { granularity: "line" }).resolvedOptions()
        .lineBreakStyle
);

// test/intl402/Segmenter/constructor/constructor/options-valid-combinations.js

assertEquals("ar", new Intl.Segmenter(["ar"]).resolvedOptions().locale);

assertEquals("ar", new Intl.Segmenter(["ar", "en"]).resolvedOptions().locale);

assertEquals("fr", new Intl.Segmenter(["fr", "en"]).resolvedOptions().locale);

assertEquals("ar", new Intl.Segmenter(["xyz", "ar"]).resolvedOptions().locale);
