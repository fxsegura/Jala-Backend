import { Doctor } from "./Doctor.mjs";
export class SanPedro{
    constructor(){
        this.doctors=[]
    }
    newDoctor(name,specialty){
        let doc=new Doctor(name,specialty)
        this.doctors.push(doc)
    }
    getDoctors(){
        return this.doctors;
    }
} 