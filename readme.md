# Defer

Defer execution of a task.

## Installation

```sh
npm install --save defer
```

## Usage

```js
const defer = require('defer')

async function signup (input) {
  // create user

  defer(async () => {
    // send welcome email
  })

  return user
}
```

## API

### `defer(fn): Promise`

Returns a `Promise` that will resolve with the return value of `fn`. The function `fn` will be invoked at a later stage in the event loop.
