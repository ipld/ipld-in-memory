const IPFSRepo = require('ipfs-repo')
const { MemoryDatastore } = require('interface-datastore')
const BlockService = require('ipfs-block-service')
const hat = require('hat')

/**
 * Create an IPLD instance with an in memory blockservice and repo.
 *
 * @param {IPLD} IPLD An IPLD constructor
 * @param {function(Error, IPLD)} callback
 * @returns {void}
 */
module.exports = async (IPLD) => {
  const repo = new IPFSRepo('in-memory-' + hat(), {
    storageBackends: {
      root: MemoryDatastore,
      blocks: MemoryDatastore,
      datastore: MemoryDatastore,
      keys: MemoryDatastore
    },
    lock: 'memory'
  })
  const blockService = new BlockService(repo)

  await repo.init({})
  await repo.open()
  return new IPLD({ blockService })
}
