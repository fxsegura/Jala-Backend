//const assert = require('chai').assert;
import { assert, expect } from 'chai';
import { testArr } from '../array.mjs';

//Basic Array Operations
//create
let fruits = ['Apple', 'Banana']
console.log(fruits)
assert.ok(fruits)

//Access an item using index
console.log(fruits[0])
console.log(testArr[2])

//Loop array
fruits.forEach(function(item, index, array) {
    console.log(item, index)
  })

//Add item to end
fruits.push('Orange')
console.log(fruits)
//Remove item from end
fruits.pop();
console.log(fruits)

//.map()
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr)

//.find()