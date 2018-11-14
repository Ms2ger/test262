// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Segmenter
description: Checks handling of valid values for the granularity option to the Segmenter constructor.
info: |
    Intl.Segmenter ([ locales [ , options ]])

    9. Let lineBreakStyle be ? GetOption(options, "lineBreakStyle", "string", « "strict", "normal", "loose" », "normal").
    13. Let granularity be ? GetOption(options, "granularity", "string", « "grapheme", "word", "sentence", "line" », "grapheme").
    14. Set segmenter.[[SegmenterGranularity]] to granularity.
    15. If granularity is "line",
        a. Set segmenter.[[SegmenterLineBreakStyle]] to r.[[lb]].
features: [Intl.Segmenter]
---*/

const lineBreakStyleOptions = ["strict", "normal", "loose"];
const granularityOptions = ["grapheme", "word", "sentence", "line"];

for (const lineBreakStyle of lineBreakStyleOptions) {
  for (const granularity of granularityOptions) {
    const segmenter = new Intl.Segmenter([], { granularity, lineBreakStyle });
    const resolvedOptions = segmenter.resolvedOptions();
    assert.sameValue(resolvedOptions.granularity, granularity);
    assert.sameValue(resolvedOptions.lineBreakStyle, granularity === "line" ? lineBreakStyle : undefined);
  }
}
