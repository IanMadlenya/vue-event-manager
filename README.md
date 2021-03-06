# vue-event-manager [![Version](https://img.shields.io/npm/v/vue-event-manager.svg)](https://www.npmjs.com/package/vue-event-manager) [![License](https://img.shields.io/npm/l/vue-event-manager.svg)](https://www.npmjs.com/package/vue-event-manager) [![Downloads](https://img.shields.io/npm/dt/vue-event-manager.svg)](https://www.npmjs.com/package/vue-event-manager)

The plugin for [Vue.js](http://vuejs.org) provides a declarative way to bind events to a global event manager. It uses the Vue lifecycle to automatically bind and unbind all events.

## Features

- Supports event priorities and [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) based asynchronous events
- Supports latest Firefox, Chrome, Safari, Opera and IE9+
- Supports Vue 1.0 & Vue 2.0
- Compact size 2KB

## Installation
You can install it via [yarn](https://yarnpkg.com/) or [NPM](http://npmjs.org/).
```
$ yarn add vue-event-manager
$ npm install vue-event-manager
```

### CDN
Available on [jsdelivr](https://cdn.jsdelivr.net/npm/vue-event-manager@1.0.5) or [unpkg](https://unpkg.com/vue-event-manager@1.0.5).
```html
<script src="https://cdn.jsdelivr.net/npm/vue-event-manager@1.0.5"></script>
```

## Example
```js
new Vue({

  created() {

    // trigger event
    this.$trigger('someEvent', {foo: 'bar'});

  },

  events: {

    // event handler (priority 0)
    someEvent(param) { ... },

    // event handler (priority 10)
    earlyEvent: {

        // handler callback
        handler(param) { ... },

        // a higher priority, means earlier execution
        priority: 10

    },

    // event handler (priority -10)
    lateEvent: {

        // handler callback
        handler(param) { ... },

        // a lower priority, means late execution
        priority: -10

    }

  }

});
```

## Changelog

Details changes for each release are documented in the [release notes](https://github.com/pagekit/vue-event-manager/releases).

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/pagekit/vue-event-manager/issues) or a [pull request](https://github.com/pagekit/vue-event-manager/pulls).

## License

[MIT](http://opensource.org/licenses/MIT)
