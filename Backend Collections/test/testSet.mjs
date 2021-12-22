//const assert = require('chai').assert;
import { assert, expect } from 'chai';
import { animals } from '../setExamp.mjs';


console.log(animals)
//Can't add repeated values
console.log(animals.size)
animals.add('Pig')
console.log(animals.size)

//iterating
//foreach
animals.forEach(animal => {
    console.log(`Hey ${animal}!`);
  });
//forof
for (let animal of animals) {
    console.log(`Hello ${ animal }`);
  }

//clear set
animals.clear();
console.log(animals.size); 
