import Person from "./Person.mjs";

export default class Employee extends Person {
    constructor(name, title){
        super(name);
        this.title=title;
    }
    describe(){
        return super.describe() + `(${this.title})`;
    }
}