// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
    Verifies handling of options with privateuse tags.
info: |
    ApplyOptionsToTag( tag, options )

    10. If language is not undefined,
        a. If tag matches the privateuse or grandfathered production,
            i. Set tag to language.

features: [Intl.Locale]
---*/

const loc = new Intl.Locale("x-default", {
  language: "fr",
  script: "Cyrl",
  region: "DE",
  numberingSystem: "latn",
});
assert.sameValue(loc.toString(), "fr-Cyrl-DE-u-nu-latn");
assert.sameValue(loc.language, "fr");
assert.sameValue(loc.script, "Cyrl");
assert.sameValue(loc.region, "DE");
assert.sameValue(loc.numberingSystem, "latn");
