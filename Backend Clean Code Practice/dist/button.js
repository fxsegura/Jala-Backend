"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    constructor(device) {
        this.device = device;
    }
    onButtonListener() {
        if (this.device.getStatus()) {
            this.device.turnOff();
        }
        else {
            this.device.turnOn();
        }
    }
}
exports.default = Button;
//# sourceMappingURL=button.js.map