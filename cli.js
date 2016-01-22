#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import { transform } from 'babel-core';
import { execSync, spawn } from 'child_process';

function startShell(restArgs) {
  // Spawn a babel-node shell in the correct location:
  const fullArgs = ['--presets', 'es2015,stage-0', ...restArgs];
  const binPath = path.resolve(__dirname, 'node_modules', '.bin', 'babel-node');
  const proc = spawn(binPath, fullArgs, {
    stdio: 'inherit',
    cwd: __dirname
  });

  proc.on('exit', process.exit);
}

function runFile(filename) {
  // As babel-node won't let us run files with a different working directory,
  // we'll need to compile it manually with Babel, and then pipe it
  // into a regular Node process (kind of hacky):
  const originalPath = process.cwd();
  const file = fs.readFileSync(separator).toString();

  // Babel needs to be in the same folder as node_modules to access the
  // presets/plugins:
  process.chdir(__dirname);
  const { code } = transform(file, {
    presets: ['es2015', 'stage-0']
  });

  // We still want to run Node from our original directory though:
  process.chdir(originalPath);
  const proc = spawn('node');
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  proc.stdin.write(code);
  proc.stdin.end();
}

const args = process.argv.slice(2);
const [separator, ...rest] = args;

if (separator === '--' || !args.length) {
  startShell(rest);
} else if (separator) {
  runFile(separator);
}

