# babel-esnext [![Build status](https://ci.frigg.io/badges/ekmartin/babel-esnext/)](https://ci.frigg.io/ekmartin/babel-esnext/last/)

> A babel-node wrapper with ES2015+ features

Similar to `babel-node --stage 0` in Babel 5 and downwards.

## Installation
```
$ npm install --global babel-esnext
```

## Usage
Babel 6 requires presets to be installed locally, which means something like
`babel-node --presets es2015,stage-0` won't work wherever you want.

This does however, and works as a wrapper around `babel-node`:

```bash
# Empty shell:
$ babel-esnext

# Passing arguments to babel-node:
$ babel-esnext --eval "console.log(5)"

# Running a file:
$ babel-esnext filename.js
```

Uses the following Babel presets:
* [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0)
* [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)

## License
MIT @ [Martin Ek](https://ekmartin.com)
