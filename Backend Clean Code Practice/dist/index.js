"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lamp_1 = __importDefault(require("./lamp"));
const button_1 = __importDefault(require("./button"));
const television_1 = __importDefault(require("./television"));
const lamp = new lamp_1.default();
const tv = new television_1.default();
const button = new button_1.default(lamp);
const btnTV = new button_1.default(tv);
button.onButtonListener();
button.onButtonListener();
btnTV.onButtonListener();
btnTV.onButtonListener();
//# sourceMappingURL=index.js.map