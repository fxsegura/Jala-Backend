import { IDevice } from "./device.interface";

export default class Button {
    constructor(protected device: IDevice) {

    }
    onButtonListener() {

        if (this.device.getStatus()) {

            this.device.turnOff()

        } else {

            this.device.turnOn();

        }

    }
}