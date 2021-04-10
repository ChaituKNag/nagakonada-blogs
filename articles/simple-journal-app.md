---
title: A Simple Journal App
description: I built a CodePen app that resembles a preliminary Journal app, using React, Bootstrap, Moment.js and localStorage as a DB.
date: 2019-05-12
id: simple-journal-app
---

> When you have the itch in your head to try stuff, you become good at that stuff.

## Premise

I built a CodePen app that resembles a preliminary Journal app, using React, Bootstrap, Moment.js and localStorage as a DB.

## What this post is about

I just want to share a few important concepts that you may be interested in.

### JSON.stringify and JSON.parse

Whenever we are storing items in localStorage, we will have to stringify the value and parsing it while reading it.

```javascript
const getEntriesFromStorage = () =>
  JSON.parse(window.localStorage.getItem("journalEntries"));
const setEntriesToStorage = (items) =>
  window.localStorage.setItem("journalEntries", JSON.stringify(items));
```

### Deleting an entry using Array.prototype.slice

When we have to delete an entry, we will create a new array out of the old one using the two features:

1. Array.prototype.slice
2. The `...` spread operator

The index is the one of the item to delete in the array.

```javascript
const newEntries = [...entries.slice(0, index), ...entries.slice(index + 1)];
```

### Higher order delete entry click handler

To make the delete button work for each entry in the list of entries, we have to let the event handler know the item it has to delete in the DB, so we create a higher order function (one that returns another function which acts as the actual event handler).

```javascript
const handleDeleteClick = (index) => (e) => {
  deleteEntry(index);
};
```

### Textarea in focus on page load

In the add Entry form, We want the focus onto the message textarea so that we can readily enter the message on page load, we can do a useEffect that runs only once per page load because of an empty array as second argument.

```javascript
useEffect(() => {
  fieldRef.current.focus();
}, []);
```

### Moment.js .fromNow usage

When we show the date and time at which the entry was recorded, we can use a special feature of Moment.js called .fromNow() that converts the duration since the entry was recorded till now into human readable messages like "a few moments ago" and "2 minutes ago".

```javascript
const itemDate = moment(item.date).fromNow();
```

### Custom hook (useJournal)

Any function that returns an array or object containing at least one of the built-in React hooks is known as a custom hook. In our case, we are abstracting the read-write to localStorage functionality in this custom hook so as to keep the functionality reusable and less messy in the component using it.

```javascript
function useJournal() {
  const [entries, setEntries] = useState([]);

  const getEntriesFromStorage = () =>
    JSON.parse(window.localStorage.getItem("journalEntries"));
  const setEntriesToStorage = (items) =>
    window.localStorage.setItem("journalEntries", JSON.stringify(items));
  useEffect(() => {
    const entriesFromStorage = getEntriesFromStorage();
    if (entriesFromStorage) {
      setEntries(entriesFromStorage);
    }
  }, []);

  const storeEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    setEntriesToStorage(newEntries);
  };

  const removeEntry = (index) => {
    const newEntries = [
      ...entries.slice(0, index),
      ...entries.slice(index + 1)
    ];
    setEntries(newEntries);
    setEntriesToStorage(newEntries);
  };

  return [entries, storeEntry, removeEntry];
}
```

## Conclusion

Have a look at the CodePen (below) to understand what is done there and do suggest any simple changes that might improve the example greatly.

### Demo

Please check it [here](https://codepen.io/skola17/pen/NVrBKj).

> Originally posted in Dev.to [here](https://dev.to/chaituknag/a-simple-journal-app-using-react-localstorage-and-fun-23j8).
