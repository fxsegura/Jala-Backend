export default class Person{
    constructor(name){
        this.name = name;
    }
    describe(){
        return `Person named ${this.name}`;
    }
}