---
title: How to check if you are in an iFrame
description: What if you want to check if your page is hosted in an i-frame and may be prevent certain features?
sidebar_label: Detect IFrame
---

What if you want to check if your page is hosted in an i-frame and may be prevent certain features?

On the network side, you can pass a response header from your server that looks like this:

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

The `X-Frame-Options: DENY` header prevents your page to be accessed in an i-frame altogether.

Whereas, the `X-Frame-Options: SAMEORIGIN` header allows the page to load if the parent (wrapping window) of the i-frame is of the same origin, which is somewhat OK.

But if you do not have a header provided by your server and you still want to check if you are inside an i-frame, you may do the following conditional check.

```
if(window.location === window.parent.location) {
  // you are not inside an i-frame
} else {
  // you are definitely inside an i-frame
}

```

Alright, I hope this helps.

## References

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
https://tommcfarlin.com/check-if-a-page-is-in-an-iframe/
