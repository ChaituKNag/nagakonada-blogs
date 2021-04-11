---
title: JavaScript Closures
description: A quick fact check about JavaScript closures.
---

This is from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures):

> A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

## Explanation

I know the above paragraph is a mouthful. In simpler terms, if a function during, its execution, is able to access values from the place where it is declared, even though that place (an outer function) is not being executed or not queued for execution, then that constitutes a closure. This is possible because of how JavaScript executes, every function has not only its signature, but also its scope (from where it is declared), that get stored in memory during the actual execution so that those scoped values can be retrieved when needed.

> **Fun fact**: If there are 4 values in the scope of a function and only 2 are being used by that function, that means when that function is getting executed or queued for execution, only those 2 values being referred are kept in memory and the other values are not kept.

Closure is not a thing, it is a phenomenon. A bi-product of lexical scoping and execution context.

```javascript
function init() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  // executes and takes the scoped name value with it.
  displayName();
}
init();
```

## Practical use-cases

- Currying functions
- Object oriented programming
- Callbacks like _event handlers_
