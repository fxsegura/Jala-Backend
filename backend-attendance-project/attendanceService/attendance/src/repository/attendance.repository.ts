import { EntityRepository, Repository } from "typeorm";
import { Attendance } from "../entity/attendance.entity";

@EntityRepository(Attendance)
export class AttendanceRepository extends Repository<Attendance>{
    
}