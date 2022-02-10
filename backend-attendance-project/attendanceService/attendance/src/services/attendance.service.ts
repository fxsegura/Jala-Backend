import { Connection, createConnection, getConnection, getConnectionManager, getConnectionOptions, QueryRunner } from "typeorm";
import { Attendance } from "../entity/attendance.entity";
import { AttendanceRepository } from "../repository/attendance.repository";
import "reflect-metadata";

export class AttendanceService {
    private attendanceRepository: AttendanceRepository;
    constructor() {
        this.attendanceRepository = getConnection().getCustomRepository(AttendanceRepository);
    }

    public readAttendanceService = async () => {
        const newAttendance = await this.attendanceRepository.find();
        return newAttendance;
    }

    public createAttendanceService = async (attendance: Attendance) => {
        const newAttendance = await this.attendanceRepository.save(attendance);
        return newAttendance;
    }

    public deleteAttendance = async (id: string) => {
        const deletedAttendance = await this.attendanceRepository.delete(id);
        return deletedAttendance;
      } 

}