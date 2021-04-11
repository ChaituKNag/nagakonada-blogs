---
title: Web components or custom elements
description: What is so great about these new kind of HTML elements?
sidebar_label: Custom Elements
---

> ### Here is the WhatWG definition:
>
> [Custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element) provide a way for authors to build their own fully-featured DOM elements. Although authors could always use non-standard elements in their documents, with application-specific behavior added after the fact by scripting or similar, such elements have historically been non-conforming and not very functional. By [defining](https://html.spec.whatwg.org/multipage/custom-elements.html#element-definition) a custom element, authors can inform the parser how to properly construct an element and how elements of that class should react to changes.
>
> Custom elements are part of a larger effort to "rationalise the platform", by explaining existing platform features (like the elements of HTML) in terms of lower-level author-exposed extensibility points (like custom element definition).

### Rules on creating custom elements

1. The name of a custom element **must contain a dash (-)**. So `<x-tags>`, `<my-element>`, and `<my-awesome-app>`are all valid names, while `<tabs>`and `<foo_bar>`are not. This requirement is so the HTML parser can distinguish custom elements from regular elements. It also ensures forward compatibility when new tags are added to HTML.
2. You can't register the same tag more than once. Attempting to do so will throw a `DOMException`. Once you've told the browser about a new tag, that's it. No take backs.
3. Custom elements cannot be self-closing because HTML only allows [a few elements](https://html.spec.whatwg.org/multipage/syntax.html#void-elements) to be self-closing. Always write a closing tag (`<app-drawer></app-drawer>`).

More details [here](https://developers.google.com/web/fundamentals/web-components/customelements).
