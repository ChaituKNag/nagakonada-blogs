---
title: Creating React Components
description: I would like to show the different ways we can create React Components. I like the arrow function statement style the most.
id: creating-react-components
---

> I would like to show the different ways we can create React Components. I like the `arrow function statement` style the most.

## 1) Function declaration

```jsx
// Different ways of creating react Components

// 1) function declaration
import React from "react";

function Component() {
  return <h1>Hello World</h1>;
}

export default Component;
```

## 2) Anonymous function statement

```jsx
// Different ways of creating react Components

// 2) anonymous function statement
import React from "react";

const Component = function () {
  return <h1>Hello World</h1>;
};

export default Component;
```

## 3) Arrow function statement

```jsx
// Different ways of creating react Components

// 3) arrow function statement
import React from "react";

const Component = () => {
  return <h1>Hello World</h1>;
};

export default Component;
```

## 4) default export function

```jsx
// Different ways of creating react Components

// 4) export default function
import React from "react";

export default () => {
  return <h1>Hello World</h1>;
};
```

## 5) classic component syntax

```jsx
// Different ways of creating react Components

// 5) classic component syntax
import React from "react";

class Component extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default Component;
```

What is your favorite one, is there a better one than the ones I mentioned here?

> Originally posted on Dev.to [here](https://dev.to/chaituknag/creating-react-components-different-syntaxes-55o2).
