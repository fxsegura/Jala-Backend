"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotificationCenter {
    constructor(user, message) {
        this.user = user;
        this.message = message;
    }
    notifyByEmail() {
        console.log(`Notify by email ${this.user.name} message: ${this.message}.....`);
    }
    notifyByText() {
        console.log(`Notify by SMS ${this.user.name} message: ${this.message}.....`);
    }
}
exports.default = NotificationCenter;
//# sourceMappingURL=notificationCenter.js.map