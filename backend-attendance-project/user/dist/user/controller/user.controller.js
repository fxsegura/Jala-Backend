"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = require("express");
const user_service_1 = require("../services/user.service");
class UserController {
    constructor() {
        this.readUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.readUserService();
            res.send(users).json();
        });
        this.createUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req['body'];
            const newUser = yield this.userService.createUserService(user);
            res.send(newUser);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req['params']['id'];
            res.send(this.userService.delete(id));
        });
        this.router = (0, express_1.Router)();
        this.userService = new user_service_1.UserService();
        this.routes();
    }
    routes() {
        this.router.get('/', this.readUserController);
        this.router.post('/', this.createUserController);
        this.router.delete('/:id', this.delete);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map