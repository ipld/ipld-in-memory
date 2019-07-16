const test = require('tape')
const inMemory = require('.')

class IPLD {}

test('should create an IPLD instance', async (t) => {
  t.plan(1)
  try {
    const ipld = await inMemory(IPLD)
    t.ok(ipld instanceof IPLD)
    t.end()
  } catch (e) {
    t.fail(e)
  }
})
