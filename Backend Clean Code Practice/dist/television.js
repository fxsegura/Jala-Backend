"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Television {
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
    getStatus() {
        return this.status;
    }
}
exports.default = Television;
//# sourceMappingURL=television.js.map