import serialize from "../modules/serializeBigint.mjs"
import deserialize from "../modules/deserializeBigint.mjs"
describe('Deserialize Bigint',function(){
    it('Should deserialize strings of numbers ending in n into a bigint,',function(){
        const data1 = '{"value1":"1231231231231231213n","nested":{"value2":"848484848484848484884n"}}'

        console.log(deserialize(data1));
    });
    it('Should deserialize strings of numbers ending in n into bigint within a complex object,',function(){
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

        console.log(deserialize(serialize(data2)));
    });
});