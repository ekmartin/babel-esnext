# babel-esnext
> A babel-node wrapper with ES2015+ features

## Installation
```
$ npm install --global babel-esnext
```

## Usage
Babel 6 requires presets to be installed locally, which means something like
`babel-node --presets es2015,stage-0` won't work wherever you want.

This let's you instead run:
```bash
$ babel-esnext
```

Which opens a Node shell with the following presets:
* [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0)
* [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)

All arguments are passed directly to `babel-node`. 

## License
MIT @ [Martin Ek](https://ekmartin.com)
