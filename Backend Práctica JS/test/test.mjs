//const assert = require('chai').assert;
import { assert, expect } from 'chai';
import { hello } from '../hello.mjs';

//describe('First Test', function () {
  //  it("First Test", () =>{
    //assert.equal(hello('Jane'),'Hi Jane!');
    //assert.equal(hello('John'),'Hi John!');
    //assert.equal(hello(''),'Hi !');
  //  });
//});

//const result = typeof '';











/*const numbers = [1,2,3,4,5]

describe('Test',function () {
    it('Test array of numbers ',function(){
        expect(assert.isArray(numbers,'Array of num'));
    });
    it('array of numbers should contain 2',function(){
        expect(assert.include(numbers,2,'Array of num contain 2'));
    });
    it('array length 5',function(){
        expect(assert.lengthOf(numbers,5,'Array length is 5'));
    });
});
function hello1(name){
    return `Hi ${name}!`;
}
*/
//const result = true.someProperty
//let foo;
//function bar(){}
//const baz = (x)=>x
//assert.equal(typeof true, 'boolean')
//assert.equal(typeof true, 'object')
//const x = 0x10
//console.log(x)
assert.ok(NaN===NaN)