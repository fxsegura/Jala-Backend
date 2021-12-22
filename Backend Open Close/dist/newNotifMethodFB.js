"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notificationCenter_1 = __importDefault(require("./notificationCenter"));
class NotificationFB extends notificationCenter_1.default {
    constructor(user, message) {
        super(user, message);
    }
    notifyByFB() {
        console.log(`Notify by faceobook message:.....`);
    }
}
exports.default = NotificationFB;
//# sourceMappingURL=newNotifMethodFB.js.map