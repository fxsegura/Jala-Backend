import express, { Request, request, Response, response } from "express";
import { createConnection } from "typeorm";
import { UserController } from "../user/controller/user.controller";

export class Server {
    private app: express.Application;
    private userController: UserController

    constructor() {
        this.app = express();
        this.configuration();
        this.userController = new UserController();
        this.routes();
    }

    public configuration() {
        this.app.set('port', 3000);

    }

    public async routes() {
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3307,
            username: "root",
            password: "root",
            database: "attendancedb",
            entities: ["build/user/entities/**/*.ts"],
            name: "users"
        });

        this.app.use('/api/user', this.userController.router);
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello World");
        });
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port`);
        });
    }


}

    //const server = new Server();
    //server.start();