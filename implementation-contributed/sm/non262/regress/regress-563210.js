/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [sm/non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
if (typeof gczeal != 'undefined' && typeof gc != 'undefined') {
    try
    {
        try {
            __defineGetter__("x", gc)
        } catch (e) {}
        gczeal(1)
        print(x)(Array(-8))
    }
    catch(ex)
    {
    }
}

// Reset gczeal.
if (typeof gczeal !== 'undefined')
    gczeal(0)

assert.sameValue("no assertion failure", "no assertion failure", "bug 563210");


