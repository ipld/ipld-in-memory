const test = require('tape')
const inMemory = require('.')

class IPLD {}

test('should create an IPLD instance', t => {
  inMemory(IPLD, (err, ipld) => {
    t.ifError(err)
    t.ok(ipld instanceof IPLD)
    t.end()
  })
})
