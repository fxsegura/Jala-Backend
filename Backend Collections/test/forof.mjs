//const assert = require('chai').assert;
import { assert, expect } from 'chai';
import { testArr } from '../array.mjs';

for (let fruits of testArr){
    console.log(fruits)
}