import { Router, Response, Request } from "express";
import { Attendance } from "../entity/attendance.entity"; 
import { AttendanceService } from "../services/attendance.service"; 
import axios from "axios";
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

    public listAttendanceController = async (req:Request,res:Response)=>{
        const attendance = await this.attendanceService.readAttendanceService();

        const students = await axios.get('http://localhost:3000/api/user')
        
        //attendance.concat(students);
        //console.log(students);
        res.send(students.data);
    }

    public createAttendanceController=async(req:Request,res:Response)=>{
        const attendance = req['body'] as Attendance;
        const newAttendance = await this.attendanceService.createAttendanceService(attendance);
        //const students = await axios.get('http://localhost:3000/api/user/updateTotal/:id');
        res.send(newAttendance);
    }

    public delete = async (req: Request, res: Response) => {
        const id =  req['params']['id'];
        res.send(this.attendanceService.deleteAttendance(id));
      } 


    public routes(){
        this.router.get('/',this.readAttendanceController);
        this.router.get('/list',this.listAttendanceController);
        this.router.post('/',this.createAttendanceController);
        this.router.delete('/:id', this.delete);
    }
}