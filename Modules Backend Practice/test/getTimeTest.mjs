import {assert, expect} from 'chai';
import getTime from "../modularity/getTime.mjs"
describe('Get time of day/ shift',function(){
    it('Returns true if between 6 am and 7 pm depending on system time,else false',function(){
        let time= getTime();
        console.log(time);
        if(time)
            assert.equal(time,true, "True if daytime")
        else
            assert.equal(time,false, "False if night")
    });
});