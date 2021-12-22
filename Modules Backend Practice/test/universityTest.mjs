import {assert, expect} from 'chai';
import university from "../modularity/University.mjs"
import getTime from "../modularity/getTime.mjs"
describe('Testing university',function(){
    it('Returns list of doctors based on time',function(){
        let time= getTime();
        if(time)
            expect(university()).to.deep.equal([{ _name: 'Pedro', _specialty: 'General' },{ _name: 'Carlos', _specialty: 'General' },{ _name: 'John', _specialty: 'General' }]);
        else
            expect(university()).to.deep.equal([{ _name: 'Roberto', _specialty: 'General' },{ _name: 'Jose', _specialty: 'Neurosurgeon' },{ _name: 'Katherine', _specialty: 'Ophthalmologist' }]);
    });
});