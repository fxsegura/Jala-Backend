//const assert = require('chai').assert;
import { assert, expect } from 'chai';
import { ws } from '../weakSetExamp.mjs';
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

console.log(ws.has(foo));    // true
console.log(ws.has(bar));    // true

ws.delete(foo); // removes foo from the set
console.log(ws.has(foo));    // false, foo removed
console.log(ws.has(bar));   //true