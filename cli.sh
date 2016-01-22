#!/bin/bash
ROOT="$(npm explore -g babel-esnext -- pwd)/node_modules"
PRESETS="$ROOT/babel-preset-es2015,$ROOT/babel-preset-stage-0"
BABELNODE="$ROOT/.bin/babel-node"
eval "$BABELNODE --presets $PRESETS $*"
