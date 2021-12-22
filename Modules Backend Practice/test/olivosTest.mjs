import {assert, expect} from 'chai';
import { LosOlivos } from "../modularity/LosOlivos.mjs";
import {Doctor} from "../modularity/Doctor.mjs"
describe('Testing if new doctors can be added',function(){
    it('Returns list of doctors added',function(){
        let doc=new Doctor('Pepe','Ophthalmologist')
        let olivos=new LosOlivos()
        olivos.newDoctor(doc._name,doc._specialty)
        olivos.newDoctor('James','General')
        console.log(olivos.getDoctors())
        expect(olivos.getDoctors()).to.deep.equal([{_name: 'Pepe', _specialty: 'Ophthalmologist'},{ _name: 'James', _specialty: 'General' }]);
    });
});