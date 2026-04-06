#!/usr/bin/env node
console.log('Welcome to the Brain Games!')

import { yourName } from '../src/cli.js'

console.log('Hello, ' + yourName() + '!')
