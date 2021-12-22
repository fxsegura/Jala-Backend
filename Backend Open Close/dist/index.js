"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const notificationCenter_1 = __importDefault(require("./notificationCenter"));
const newNotifMethodFB_1 = __importDefault(require("./newNotifMethodFB"));
const user = new user_1.default('Bob');
const notifCenter = new notificationCenter_1.default(user, 'Test Message');
const notifFB = new newNotifMethodFB_1.default(user, "Test Message");
notifCenter.notifyByEmail();
notifFB.notifyByFB();
debugger;
//# sourceMappingURL=index.js.map