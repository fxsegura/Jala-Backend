import express, { Request, request, Response, response } from "express";
import { createConnection, getConnectionOptions } from "typeorm";
import { AttendanceController } from "../controller/attendance.controller";
import { Attendance } from "../entity/attendance.entity";
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
        const connectionOptions = await getConnectionOptions();
        // await createConnection({
        //     type: "mongodb",
        //     url: "mongodb+srv://admin:Passw0rd@backend-jalasoft-projec.7ztqa.mongodb.net/assistanceBackend?retryWrites=true&w=majority",
        //     useNewUrlParser: true,
        //     port: 27017,
        //     username: "admin",
        //     password: "Passw0rd",
        //     database: "assistanceBackend",
        //     synchronize: true,
        //     logging: false,
        //     entities: [
        //         "src/entity/**/*.entity.ts"
        //     ],
        //     migrations: [
        //         "src/migration/**/*.ts"
        //     ],
        //     subscribers: [
        //         "src/subscriber/**/*.ts"
        //     ],
        //     cli: {
        //         "entitiesDir": "src/entity",
        //         "migrationsDir": "src/migration",
        //         "subscribersDir": "src/subscriber"
        //     }
        // });
        await createConnection(connectionOptions).then(async connection => {
        });
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