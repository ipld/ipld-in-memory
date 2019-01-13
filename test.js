const test = require('tape')
const IPLD = require('ipld')
const createIpld = require('.')

test('should create an IPLD instance', t => {
  createIpld((err, ipld) => {
    t.ifError(err)
    t.ok(ipld instanceof IPLD)
    t.end()
  })
})
