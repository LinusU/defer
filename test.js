'use strict'

const assert = require('assert')
const defer = require('./')

let a = 1

defer(() => { a = 2 })

assert.strictEqual(a, 1)

setTimeout(() => {
  assert.strictEqual(a, 2)
}, 1)
