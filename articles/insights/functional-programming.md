---
title: JavaScript - functional programming
description: Lets look at one of the most popular programming paradigms in use today.
sidebar_label: Functional Programming
---

## What is functional programming?

This is one of the three popular programming paradigms in use today.

### Namely

- Procedural programming - Logic is executed in a set of instructions which execute line by line. Example: C language.
- Object oriented programming - Logic is executed as a "is-a" hierarchy of objects and requires object oriented principles to be followed like encapsulation, polymorphism, abstraction and inheritance among others. Example: C++, Java, .Net etc.
- Functional programming - Logic is written as pure functions without side-effects, mutable state or shared data. Example: Haskel, Closure

Is JavaScript a functional programming language? Answer is **yes it can be!**

## How to identify functional programming style?

1. **Immutable state**, if you see objects or values directly getting updated in your logic, then it may be mutable state. In FP, state is never directly updated.
2. **State should not be shared**, if you see the state data being shared among different elements of the application, then its not following FP style.
3. **Pure functions - no side effect**, side-effect can be as simple as a `console.log` or as high level as an ajax call. Simply put, side effect cause another part of the application to change based on the execution of a function. This deems that function to be impure and hence not following FP style.
4. **Functions as first class entities**, to be able to pass around functions as if they are the fundamental pieces of your application, so that the above principles can be easily achieved.
5. **Referential transparency**, is a by-product of the above principles and essentially it means that instead of a pure function which does not mutate or share outside state, can easily be replaced by the actual returned value of that function.
