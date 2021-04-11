---
title: JavaScript const keyword
description: Ecmascript 6 introduces this new const keyword
sidebar_label: Javascript Const Keyword
---

1. `const` keyword always creates a value which is scoped to the block in which it is declared.
2. Values created using `const` are not mutable by value or reference.
3. So, all primitive values created using `const` can never be replaced by another value.
4. For non primitive values like `objects` and `arrays`, their references cannot be changed, but still they can be mutated.

This 4th point has always been tricky for new comers to JavaScript.

```javascript
const x = 10;
x = 20; // fails

const user = {
  x: 10
};

user.x = 20; // works
```
