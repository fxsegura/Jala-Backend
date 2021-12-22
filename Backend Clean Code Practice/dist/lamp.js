"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lamp {
    constructor() {
    }
    turnOn() {
        this.status = true;
        console.log('Lamp is ON');
    }
    turnOff() {
        this.status = false;
        console.log('Lamp is OFF');
    }
    getStatus() {
        return this.status;
    }
}
exports.default = Lamp;
//# sourceMappingURL=lamp.js.map