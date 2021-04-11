---
title: React Component Reusability - best practices
description: These are some of the points related to best practices for reusable components in React-based projects.
sidebar_label: React Component Reusability
---

## Intro

> These are some of the points related to best practices for reusable components in React-based projects.

## All best practices

- Components should be small and easy to read.
- Use prop-types package to structure and validate the props of your components.
- For styled-components, do not include any functional details, instead pass them as props.
- For container components, do not include UI details, instead, let the children styled-components take care of them
- Prefer functional components vs class-based components.
- Prefer CSS in JS strategy for styled-components for better maintainability.
- UI variations should be coming in as configurable props whereas data should be coming up as part of a global state like Redux or React Context.
- Don’t repeat sections wherever it can be avoided, instead use arrays to store those section details and loop over them.
- For components, add comments only wherever absolutely necessary (to indicate a hack or workaround for a bug).
- For library utilities (pure functions), write JS-Doc comments.
- Avoid using anonymous components wherever possible.
- All files for a component should be part of the same folder.
- Always use eslint and prettier for keeping your code clean and formatted.
- Use ES6 features.

## Conclusion

You can find a lot of articles swirling around out there and this one is just a drop. There are standardized conventions like the [Airbnb React Styleguide](https://airbnb.io/javascript/react/). Do check them out. Meanwhile, this document will keep on expanding to add more and more best practices.

> Originally posted in Dev.to [here](https://dev.to/chaituknag/best-practices-for-reusable-components-in-react-1cm9).
