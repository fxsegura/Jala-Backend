import express, { Request, request, Response, response } from "express";
import { createConnection } from "typeorm";
import { UserController } from "../user/controller/user.controller";
import path from 'path';

export class Server {
    private app: express.Application;
    private userController: UserController

    constructor() {
        this.app = express();
        this.configuration();
        this.routes();
    }

    public configuration() {
        this.app.set('port', 3000);
        this.app.use(express.json());
    }

    public async routes() {
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3307,
            username: "root",
            password: "root",
            database: "attendancedb",
            synchronize: true,
            entities: [
                path.join(__dirname, '../**/entities/*.entity.js')
            ]
        });
        console.log("Created connection");
        this.userController = new UserController();
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello World");
        });
        this.app.use('/api/user', this.userController.router);

    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port`);
        });
    }


}

    //const server = new Server();
    //server.start();