const test = require('tape')
const inMemory = require('.')

class IPLD {
  constructor (options) {
    this.options = options
  }
}

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

test('should not create two IPLD instances with the same repo name', async (t) => {
  t.plan(2)
  const iplds = await Promise.all([inMemory(IPLD), inMemory(IPLD)])
  iplds.forEach(ipld => t.ok(ipld instanceof IPLD))
  t.end()
})

test('should create an IPLD instance with options', async (t) => {
  t.plan(3)
  try {
    const ipld = await inMemory(IPLD, { formats: [] })
    t.ok(ipld instanceof IPLD)
    t.ok(Array.isArray(ipld.options.formats))
    t.ok(ipld.options.blockService)
    t.end()
  } catch (e) {
    t.fail(e)
  }
})
