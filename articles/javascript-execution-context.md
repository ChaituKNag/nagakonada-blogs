---
title: JavaScript execution context (this)
description: This article gives an extensive overview of the JavaScript execution context in the style of a tutorial.
sidebar_label: JS Execution Context
---

There is a [YouTube playlist](https://www.youtube.com/playlist?list=PL0-gUIpqQtepykqScEQFSmh9yonEl2iHc) that I did explaining the whole concept mentioned in this article, if you are that person who wants to watch and learn, please head on there.

## The agenda

- Talk about the execution context
- About `use strict` and global `this`
- Where to define a function
  - Does location matter for functions
  - Putting a function in an object literal
  - Inside a method function
- How to invoke a function
  - Normal function invocation
  - Method invocation
  - Explicit binding invocation
- How arrow functions differ
  - Where to declare the arrow functions
  - How to invoke them
- Conclusion
  - Recap differences between using `use effect` and not
  - Different types of invocations
  - Location of a normal function
  - Arrow functions invocation and location

## What is `this`

The `this` keyword refers to the object that a function gets based on how it is invoked. For arrow functions, it refers to the `this` context that gets assigned to the enclosing function.

depends on

1. whether you used `use strict`
2. how the function is invoked
3. where the function is declared
4. whether it is an arrow function or now

## About `use strict` and `this`

When you use `this` in global scope, it refers to the window object in a browser. It refers to `globalThis` when in Node.js environment.

But if you use strict mode (by putting `use strict` at the beginning of your file), then you will not get window object when you use `this`. In fact it points to `undefined`.

```jsx
function foo() {
  console.log(this === window); // true
}
```

```jsx
"use strict";
function foo() {
  console.log(this === window); // false
}
```

## Where to define a function

In modern JavaScript development, we generally tend to put functions in their own files, thanks to the JavaScrpt ES6 modules, CommonJS pattern and many other techniques that work towards using per-file concept.

But we are not touching the module system or the `import` and `export` feature of ES6. In this series, we are only concerned about the question of whether a function is declared outside another function or not.

```jsx
function foo() {
  console.log(this === obj);
}

const obj = {
  name: "naga",
  foo: function () {
    console.log(this === obj);
  }
};

obj.foo(); // true
foo(); // false
```

Remove duplicate function declaration:

```jsx
function foo() {
  console.log(this === obj);
}

const obj = {
  name: "naga",
  foo: foo
};

obj.foo(); // true
foo(); // false
```

Location does not matter when it comes to using the `this` context:

```jsx
// foo.js
export default function foo() {
  console.log(this);
}

// bar.js
import foo from "./foo.js";

const obj = {
  name: "naga",
  foo: foo
};

obj.foo(); // prints obj
foo(); // prints window
```

invoking a member method without the object

```jsx
const obj = {
  name: "naga",
  foo: function () {
    console.log(this === obj);
  }
};

obj.foo(); // true

const foo = obj.foo;
foo(); // false
```

Putting a function inside a method

```jsx
const obj = {
  name: "naga",
  foo: function () {
    function bar() {
      console.log(this === obj);
    }
    console.log(this === obj);
    return bar;
  }
};

const barFunc = obj.foo(); // true
barFunc(); // false
```

## Ways to invoke a function

normal invocation

```jsx
function foo() {
  console.log(this); // global or window
}

foo();
```

method invocation

```jsx
function foo() {
  console.log(this); // points to obj
}

const obj = {
  foo: foo
};

obj.foo(); // prints obj
```

explicit binding

```jsx
function foo() {
  console.log(this); // normally prints global or window
}

const obj = {
  bar: 10
};

const boundFoo = foo.bind(obj);

boundFoo(); // prints obj coz of the binding
```

using call or apply

```jsx
function foo() {
  console.log(this); // normally prints global or window
}

const obj = {
  bar: 10
};

foo.call(obj); // prints obj coz of the binding
foo.apply(obj); // prints obj coz of the binding
```

call vs apply

```jsx
const math = {
  add: function () {
    const args = Array.from(arguments);
    return args.reduce((sum, num) => sum + num);
  }
};

const thisArg = null;
const add5 = math.add.bind(thisArg, 5); // returns a curried function

console.log(add5(10)); // 15
console.log(math.add.call(thisArg, 5, 10)); // 15
console.log(math.add.apply(thisArg, [5, 10])); // 15
```

### Fixing sub-function problem

the problem

```jsx
const obj = {
  name: "naga",
  foo: function () {
    function bar() {
      console.log(this === obj);
    }
    console.log(this === obj);
    return bar;
  }
};

const barFunc = obj.foo(); // true
barFunc(); // false
```

using scope

```jsx
const obj = {
  name: "naga",
  foo: function () {
    const self = this;
    function bar() {
      console.log(self === obj); // oh yeah works
    }
    console.log(this === obj); // always true
    return bar;
  }
};

const barFunc = obj.foo(); // true
barFunc(); // true
```

using explicit binding

```jsx
const obj = {
  name: "naga",
  foo: function () {
    function bar() {
      console.log(this === obj);
    }
    console.log(this === obj);
    return bar;
  }
};

const barFunc = obj.foo(); // true
const barFuncBound = barFunc.bind(obj);
barFuncBound(); // now it works --> true
```

## How arrow functions differ from normal functions regarding `this`

We know normal functions take the `this` context based on how they are invoked and **not** based on where they are declared*.*

**_Arrow functions_** take the `this` context based on where they are declared and **not** based on how they are invoked.

```jsx
const foo = () => {
  console.log(this === window); // true
};

foo(); // true

const obj = {
  foo: foo
};
obj.foo(); // true, so not bound to obj even though it is a method

const objFooBound = obj.foo.bind(obj);
objFooBound(); // true, still points to window, bind fails

const fooBound = foo.bind(obj);
fooBound(); // still true, bind fails
```

### What if we declare in a function

Now the arrow function totally obeys the enclosing scope's `this` context because it is declared inside it.

```jsx
function foo() {
  const bar = () => {
    console.log(this === window);
  };
  bar();
}

foo(); // true, enclosing function is called in the normal way

const obj = {
  baz: 10,
  foo: foo
};
obj.foo(); // now false, enclosing function called using method invocation

const boundFoo = foo.bind({});
boundFoo(); // now also false, enclosing function bound to an object
```

#### visiting our old example

```jsx
const obj = {
  name: "naga",
  foo: function () {
    const bar = () => {
      console.log(this === obj); // true, now it takes context of the foo method
    };
    console.log(this === obj); // obviously true
    return bar;
  }
};

const bar = obj.foo(); // true
bar(); // true
```

this fixes the problem of having functions inside methods of an object. you may use arrow functions.

## Conclusion

- Declare normal functions anywhere, just not inside the object methods
- Use arrow functions for functions inside methods
- You can invoke normal functions in three ways: normal way, as an object method and by explicitly binding
- Arrow functions do not care how you invoke them, all they care is where they are declared.
- Use `use strict` to avoid accidentally putting stuff in the global context (window or globalThis)
