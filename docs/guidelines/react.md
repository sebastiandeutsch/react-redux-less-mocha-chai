# React

This document are guidelines how we want to use React.

# class vs. ES5 method

Like Facebook we favour ES6 / 2015 `class` rather than declaring classes ES5 style.

```javascript
// good
class MyAwesomeComponent import Component {
  class constructor(props) {
    super(props);

    this.state = {
      helloWorld: "HelloWorld"
    }
  }

  render() {
    return <div>{this.state.helloWorld}</div>
  }
}

// bad
let MyAwesomeComponent = React.createClass({ ... });
```

## stateless functions

We discourage the use of stateless functions.
> Why? Sometimes components get more complicated then you need to switch to `class`. Assigning `propTypes` feel awkquard for new JavaScript developers.

```javascript
// discouraged
function(props) {
  return (
    <div>{props.label}</div>
  )
}
```

# propTypes

`propTypes` should be declared as a `static` class property:

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

# defaultProps

`defaultProps` should be declared as a `static` class property:

```javascript
// good
class MyAwesomeComponent import Component {
  static defaultProps = {
    label: "Hello World!"
  };
  ...
}

// bad
class MyAwesomeComponent import Component {
  ...
}
MyAwesomeComponent.defaultProps = {
  label: "Hello World!"
};
```

# State

## UI-State vs. Application State

State within components should only be used for UI-State. Features like opening or closing a part of the UI or drawing the check mark of a checkbox. Transferring props to state in order to have these mutable is a code smell - you should move these properties to a reducer.

```javascript
// good
class NewsFeedComponent import Component {
  ...
}
export default connect((state) => {
  return {
    posts: state.posts.collection,
    user: state.users.currentUser
  };
}, null);

// bad
this.state = {
  posts: this.props.posts,
  user: this.props.user
}
...
componentWillReceiveProps(newProps) {
  this.setState({
    accounts: newProps.accounts,
    banks: newProps.banks
  });
}
```
