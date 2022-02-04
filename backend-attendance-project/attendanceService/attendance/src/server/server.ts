import express, { Request, request, Response, response } from "express";
import { createConnection } from "typeorm";
import { AttendanceController } from "../controller/attendance.controller";
import { Attendance } from "../entity/attendance";
///import path from 'path';

export class Server {
    private app: express.Application;
    private attendanceController: AttendanceController
    constructor() {
        this.app = express();
        this.configuration();
        this.routes();
    }

    public configuration() {
        this.app.set('port', 3001);
        this.app.use(express.json());
    }

    public async routes() {
        await createConnection().then(async connection => {


        }).catch(error => console.log(error));
        console.log("Created connection");
        this.attendanceController = new AttendanceController();
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello World");
        });
        this.app.use('/api/attendance', this.attendanceController.router);

    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port`);
        });
    }


}

    //const server = new Server();
    //server.start();