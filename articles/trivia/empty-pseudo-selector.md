---
title: The :empty pseudo selector in CSS
description: When you want to style some empty elements in HTML, you can use the :empty selector.
sidebar_label: Empty Pseudo Selector
---

When you want to style some empty elements in HTML, you can use the :empty selector.

> **Example:** May be you wish to hide those empty paragraphs so that they would not mess up the spacing of the surrounding elements.

```css
// Hides all the paragraphs that are empty.
p:empty {
  display: none;
}
```

### One caution

If you think about it, if the element itself has even a single space inside it, this selector will not work.

Works: `<p></p>`

Does not work: `<p> </p>`
