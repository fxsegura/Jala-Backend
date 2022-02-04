import "reflect-metadata";
import {createConnection, Timestamp} from "typeorm";
import {Attendance} from "./entity/attendance";

createConnection().then(async connection => {


    console.log("Inserting a new attendance item into the database...");
    const attendance = new Attendance();
    attendance.timeStart = new Date();
    attendance.timeEnd= new Date();
    attendance.date="2022-02-02"
    attendance.grades="10,10,10,5";
    await connection.manager.save(attendance);
    console.log("Saved a new user with id: " + attendance.id);

    console.log("Loading users from the database...");
    const attendanceItems = await connection.manager.find(Attendance);
    console.log("Loaded items: ", attendanceItems);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
