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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_controller_1 = require("../user/controller/user.controller");
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.routes();
    }
    configuration() {
        this.app.set('port', 3000);
        this.app.use(express_1.default.json());
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, typeorm_1.createConnection)({
                type: "mysql",
                host: "localhost",
                port: 3307,
                username: "root",
                password: "root",
                database: "attendancedb",
                synchronize: true,
                entities: [
                    path_1.default.join(__dirname, '../**/entities/*.entity.js')
                ]
            });
            console.log("Created connection");
            this.userController = new user_controller_1.UserController();
            this.app.get("/", (req, res) => {
                res.send("Hello World");
            });
            this.app.use('/api/user', this.userController.router);
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port`);
        });
    }
}
exports.Server = Server;
//const server = new Server();
//server.start();
//# sourceMappingURL=server.js.map