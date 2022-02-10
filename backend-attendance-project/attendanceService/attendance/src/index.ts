import { attendanceService } from "./rabbit/attendance.rabbit";
import { Server } from "./server/server";

const server = new Server();
server.start();
const test = attendanceService("test");