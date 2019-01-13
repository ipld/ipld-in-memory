# ipld-in-memory

[![dependencies Status](https://david-dm.org/alanshaw/ipld-in-memory/status.svg)](https://david-dm.org/alanshaw/ipld-in-memory) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> IPLD in your RAM

This is the [in memory IPLD instance that the `ipld` module used to export](https://github.com/ipld/js-ipld/blob/f7494ec7b7a52a34d33d8ec308718b31919e08b6/src/index.js#L435-L455) but as a separate module.

## Install

```sh
npm install ipld-in-memory
```

## Usage

```js
const createIpld = require('ipld-in-memory')

createIpld((err, ipld) => {
  if (err) throw err
  // ipld is an instance of IPLD (https://www.npmjs.com/package/ipld)
})
```

## Contribute

Feel free to dive in! [Open an issue](https://github.com/alanshaw/ipld-in-memory/issues/new) or submit PRs.

## License

[MIT](LICENSE) © Protocol Labs, Inc.
