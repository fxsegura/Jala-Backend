import { Router, Response, Request } from "express";
import { Attendance } from "../entity/attendance"; 
import { AttendanceService } from "../services/attendance.service"; 

export class AttendanceController{
    public router: Router;
    private attendanceService: AttendanceService;

    constructor(){
        this.router=Router();
        this.attendanceService=new AttendanceService();
        this.routes();
    }

    public readAttendanceController = async (req:Request,res:Response)=>{
        const attendance = await this.attendanceService.readAttendanceService();
        res.send(attendance).json();
    }

    public createAttendanceController=async(req:Request,res:Response)=>{
        const attendance = req['body'] as Attendance;
        const newAttendance = await this.attendanceService.createAttendanceService(attendance);
        res.send(newAttendance);
    }

    public delete = async (req: Request, res: Response) => {
        const id =  req['params']['id'];
        res.send(this.attendanceService.deleteAttendance(id));
      } 


    public routes(){
        this.router.get('/',this.readAttendanceController);
        this.router.post('/',this.createAttendanceController);
        this.router.delete('/:id', this.delete);
    }
}