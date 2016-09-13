# ES.NEXT

This document declares all features we want to use from ES.NEXT (2015/2016). In the `.babel.rc` all features (`stage-0`) are activated but please apply common sense before you use them: Don't rely on standards that might be gone tomorrow.

Generally we can use all features from ES 6/2015 like classes or arrow functions. From ES.NEXT we're using the following features since we believe they enhance the expressiveness and maintainability of our code:

## static

We're using the `static` keyword to declare class variables like `propTypes` or `defaultProps`:
> Why? Declaring these variables within the class, preferably in the beginning, is more readable for a new developer who checks out the code and interface to the react component.

```javascript
// good
class MyAwesomeComponent import Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  };
  ...
}

// bad
class MyAwesomeComponent import Component {
  ...
}
MyAwesomeComponent.propTypes = {
  label: PropTypes.string.isRequired
};
```

## Spread operator

We're using the spread operator to elegantly create a shallow copy of an object or array.
> Why?

```javascript
// good
let newState = {...state};
let newState = {...state, replacedProperty: "replacedProperty"};
let newCollection = [...collection];
let newCollection = [...collection, anotherObject];
// bad
let newState = Object.assign({}, state);
let newCollection = collection.slice(0);
```
