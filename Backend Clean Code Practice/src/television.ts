import { IDevice } from "./device.interface";

export default class Television implements IDevice{

    private status: boolean;

    constructor() {

    }
    turnOn() {

        this.status = true;

        console.log('TV is ON');

    }

    turnOff() {

        this.status = false;

        console.log('TV is OFF');

    }

    getStatus(): boolean {

        return this.status;

    }

}