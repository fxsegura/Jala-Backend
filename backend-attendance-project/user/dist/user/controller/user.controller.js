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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const user_service_1 = require("../services/user.service");
class UserController {
    constructor() {
        this.readUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.readUserService();
            res.send(users).json();
        });
        this.listUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const list = yield axios_1.default.get('http://localhost:3001/api/attendance');
            console.log(list.data);
            res.send(list.data);
        });
        this.filterUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const name = req['params']['name'];
            const users = yield this.userService.filterUserService(name);
            res.send(users);
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
        this.router.get('/:name', this.filterUserController);
        this.router.post('/', this.createUserController);
        this.router.delete('/:id', this.delete);
        this.router.get('/list', this.listUser);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map