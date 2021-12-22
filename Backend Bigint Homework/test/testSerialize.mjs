import { assert, expect } from "chai";
import serialize from "../modules/serializeBigint.mjs"
describe('Serialize Bigint',function(){
    it('Test number,',function(){
        const data = {
            value1: 123
        }
        assert.equal(serialize(data),JSON.stringify(data),"Returns string");
        //expect(serialize(data1)).to.deep.equal({"value1":"1231231231231231213n","nested":{"value2":"848484848484848484884n"}});
        //console.log(serialize(data1));
    });
    it('Test Bigint,',function(){
        const data = {
            value1: 123n
        }
        const expectedResult={value1:"123n"};
        expect(serialize(data)).equal(JSON.stringify(expectedResult));
    });
    it('Should serialize Bigint datatype,',function(){
        const data1 = {
            value1: BigInt('1231231231231231213'),
            nested: {
                value2: 848484848484848484884n,
            }
        }
        const expectedResult={"value1":"1231231231231231213n","nested":{"value2":"848484848484848484884n"}};
        //expect(serialize(data1)).to.deep.equal({"value1":"1231231231231231213n","nested":{"value2":"848484848484848484884n"}});
        assert.equal(serialize(data1),JSON.stringify(expectedResult),"Check");
        //console.log(serialize(data1));
    });
    it('Should serialize Bigint datatypes in a complex object,',function(){
        const data2 = {
            testNumber:123,
            testBigint1: BigInt('1231231231231231213'),
            testBigint2: 987n,
            nested: {
                value1: 5n,
                value2: 10,
                bigintArr: [5n],
                bigintObject:{
                    bigintValue:5n
                }
            },
            bigArr: [5,50n]
        }
        console.log(serialize(data2));
    });
});