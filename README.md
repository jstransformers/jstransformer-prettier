# jstransformer-prettier

[Prettier](https://github.com/jlongster/prettier) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-prettier/master.svg)](https://travis-ci.org/jstransformers/jstransformer-prettier)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-prettier/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-prettier)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-prettier/master.svg)](http://david-dm.org/jstransformers/jstransformer-prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-prettier.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-prettier.svg)](https://www.npmjs.org/package/jstransformer-prettier)

## Installation

    npm install jstransformer-prettier

## API

```js
var prettier = require('jstransformer')(require('jstransformer-prettier'))

var input = 'let greeting = "Hello, World!"'
var options = { singleQuote: true }
prettier.render(input, options).body
//=> "let greeting = 'Hello, World!';"
```

## License

MIT
