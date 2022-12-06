**This project is no longer under active development and has been archived.**

# ipld-in-memory

[![Build Status](https://travis-ci.org/ipld/ipld-in-memory.svg?branch=master)](https://travis-ci.org/ipld/ipld-in-memory) [![dependencies Status](https://david-dm.org/ipld/ipld-in-memory/status.svg)](https://david-dm.org/ipld/ipld-in-memory) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> IPLD in your RAM

This is the [util to create an in memory IPLD instance that the `ipld` module used to export](https://github.com/ipld/js-ipld/blob/f7494ec7b7a52a34d33d8ec308718b31919e08b6/src/index.js#L435-L455) but as a separate module.

## Install

```sh
npm install ipld-in-memory
```

## Usage

```js
const IPLD = require('ipld')
const inMemory = require('ipld-in-memory')

// options object to be passed to the IPLD constructor -
// this module sets the 'blockService' property in the options object
// so any passed value for that key will be ignored
const ipldOpts = {}

const ipld = await inMemory(IPLD, ipldOpts)
// ipld is an instance of IPLD (https://www.npmjs.com/package/ipld) configured
// to use an in memory repo for storage!
```

## Contribute

Feel free to dive in! [Open an issue](https://github.com/ipld/ipld-in-memory/issues/new) or submit PRs.

## License

[MIT](LICENSE) © Protocol Labs, Inc.
