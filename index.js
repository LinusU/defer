module.exports = function defer (fn) {
  return Promise.resolve().then(fn)
}
