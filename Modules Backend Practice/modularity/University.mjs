import getTime from "./getTime.mjs"
import {LosOlivos} from "./LosOlivos.mjs"
import {SanPedro} from "./SanPedro.mjs"

let olivos=new LosOlivos()
let pedro=new SanPedro()
function addDoctors(){
    olivos.newDoctor('Roberto','General');
    pedro.newDoctor('Pedro','General');
    olivos.newDoctor('Jose','Neurosurgeon');
    pedro.newDoctor('Carlos','General');
    olivos.newDoctor('Katherine','Ophthalmologist');
    pedro.newDoctor('John','General');
}

export default function getAvailableDoctors(){
    addDoctors();
    let day = getTime();
    if(!day)
        return olivos.getDoctors();
    return pedro.getDoctors();
}

