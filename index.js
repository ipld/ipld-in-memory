const IPFSRepo = require('ipfs-repo')
const { MemoryStore } = require('interface-datastore')
const BlockService = require('ipfs-block-service')
const IPLD = require('ipld')

/**
 * Create an IPLD instance with an in memory blockservice and repo.
 *
 * @param {function(Error, IPLD)} callback
 * @returns {void}
 */
module.exports = callback => {
  const repo = new IPFSRepo('in-memory', {
    storageBackends: {
      root: MemoryStore,
      blocks: MemoryStore,
      datastore: MemoryStore,
      keys: MemoryStore
    },
    lock: 'memory'
  })
  const blockService = new BlockService(repo)

  repo.init({}, err => {
    if (err) return callback(err)

    repo.open(err => {
      if (err) return callback(err)
      callback(null, new IPLD({ blockService }))
    })
  })
}
