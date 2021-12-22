export class Doctor{
    _name;
    _specialty;
    constructor(name, specialty){
        this.name=name;
        this.specialty=specialty;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get specialty() {
        return this._specialty;
    }
    set specialty(value) {
        this._specialty = value;
    }

}
