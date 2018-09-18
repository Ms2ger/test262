// Copyright 2018 André Bargull; Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
    Verifies the handling of options with grandfathered tags.
info: |
    Intl.Locale( tag [, options] )
    12. Set tag to ? ApplyOptionsToTag(tag, options).
    14. Let calendar be ? GetOption(options, "calendar", "string", undefined, undefined).
    16. Set opt.[[ca]] to calendar.
    30. Let r be ! ApplyUnicodeExtensionToTag(tag, opt, relevantExtensionKeys).

    ApplyOptionsToTag( tag, options )
    9. If tag matches the grandfathered production,
        a. Set tag to CanonicalizeLanguageTag(tag).
features: [Intl.Locale]
---*/

const testData = [
    // Irregular grandfathered tag.
    {
        tag: "en-GB-oed",
        options: {
            region: "US",
            calendar: "gregory",
        },
        canonical: "en-US-oxendict-u-ca-gregory",
    },

    // Canonicalized version of the above.
    {
        tag: "en-GB-oxendict",
        options: {
            region: "US",
            calendar: "gregory",
        },
        canonical: "en-US-oxendict-u-ca-gregory",
    },

    // Regular grandfathered tags.

    {
        tag: "no-bok",
        options: {
            region: "NO",
            calendar: "gregory",
        },
        canonical: "nb-NO-u-ca-gregory",
    },

    {
        tag: "no-bok",
        options: {
            region: "SE",
            calendar: "gregory",
        },
        canonical: "nb-SE-u-ca-gregory",
    },

    // Not grandfathered.

    {
        tag: "no-bok-NO",
        options: {
            region: "SE",
            calendar: "gregory",
        },
        canonical: "no-bok-SE-u-ca-gregory",
    },

    {
        tag: "no-bok-SE",
        options: {
            region: "NO",
            calendar: "gregory",
        },
        canonical: "no-bok-NO-u-ca-gregory",
    },
];

for (const {tag, options, canonical} of testData) {
    const loc = new Intl.Locale(tag, options);
    assert.sameValue(loc.toString(), canonical);
}
