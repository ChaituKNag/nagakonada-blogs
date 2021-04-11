---
title: JavaScript - let keyword
description: The let keyword in Ecmascript 6 is a bit similar to var but it is different in many nice ways.
sidebar_label: Javascript Let Keyword
---

## `let` me explain 😝

JavaScript `let` keyword is a better replacement for var for the below reasons. This got introduced in ES6 (duh!)

- It has better scoping which is **block scope**. That means you can use `let` more confidently in loops without polluting the scope of the enclosing function.
- Because of **block scope**, the whole suite of scope related issues can be avoided.
- Unlike var, values declared using `let` are not hoisted, so you will not be able to use those values before the declaration.
- At root level if you declare a value using `let`, this will not add it to the window global object.
- Re-declaring `let` values will throw an error.

More discussion in [stack-overflow](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var).
