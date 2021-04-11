---
title: JavaScript - Is it an Array or an Object
description: We take a quick look at how to check if something is an array or an object.
sidebar_label: Detect Array Object
---

## Array vs Object type checking

In pre-es6 days, there was no straight forward way of determining if a variable contains an array or an object.

Because `typeof arr` always gives you `object` even though `arr` contains an array.

So how did we check?

> Well this is kind of a _hack_, but we need to use the combination of the `Object`'s prototype method called `toString` and `Function`'s prototype method called `call`.

## Solution

As seen below, when you do `Object.prototype.toString.call` on an array, it gives exactly this string: `[object Array]`. Whereas if you do it on an object, it gives this string: `[object Object]`. **Always!**

```javascript
const arr = [1, 2, 3];
console.log(Object.prototype.toString.call(arr));
// Output: [object Array]

const obj = { a: 10, b: 20 };
console.log(Object.prototype.toString.call(obj));
// Output: [object Object]
```

## ES6 way

Luckily, the [TC39](https://tc39.es/ecma262/#sec-array.isarray) folks found this hack to be cumbersome and adopted a static method on `Array` called `Array.isArray` to find out a given value is indeed an array or not.

```javascript
const arr = [1, 2, 3];
console.log(Array.isArray(arr));
// Output: true

const obj = { a: 10, b: 20 };
console.log(Array.isArray(obj));
// Output: false
```
