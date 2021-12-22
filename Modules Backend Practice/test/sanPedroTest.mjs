import {assert, expect} from 'chai';
import { SanPedro } from "../modularity/SanPedro.mjs";
import {Doctor} from "../modularity/Doctor.mjs"
describe('Testing if new doctors can be added',function(){
    it('Returns list of doctors added',function(){
        let doc=new Doctor('John','Ophthalmologist');
        let stPedro=new SanPedro();
        stPedro.newDoctor(doc._name,doc._specialty);
        stPedro.newDoctor('Carlos','General');
        console.log(stPedro.getDoctors());
        expect(stPedro.getDoctors()).to.deep.equal([{ _name: 'John', _specialty: 'Ophthalmologist' },{ _name: 'Carlos', _specialty: 'General' }]);
    });
});