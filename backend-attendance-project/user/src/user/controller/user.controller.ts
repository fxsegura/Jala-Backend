import axios from "axios";
import { Router, Response, Request } from "express";
import { Connection } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";

export class UserController{
    public router: Router;
    private userService: UserService;

    constructor(){
        this.router=Router();
        this.userService=new UserService();
        this.routes();
    }

    public readUserController = async (req:Request,res:Response)=>{
        const users = await this.userService.readUserService();
        res.send(users).json();
    }
    
    public listUser = async (req:Request,res:Response)=>{
        const list = await axios.get('http://localhost:3001/api/attendance');
        console.log(list.data);
        res.send(list.data);
    }

    public listUserById = async (req:Request,res:Response)=>{
        const id =  req['params']['id'];
        const users = await this.userService.filterUserById(id);
        res.send(users);
    }

    public filterUserControllerName = async (req:Request,res:Response)=>{
        const name =  req['params']['name'];
        const users = await this.userService.filterUserService(name);
        res.send(users);
    }

    public createUserController=async(req:Request,res:Response)=>{
        const user = req['body'] as UserEntity;
        const newUser = await this.userService.createUserService(user);
        res.send(newUser);
    }

    public delete = async (req: Request, res: Response) => {
        const id =  req['params']['id'];
        res.send(this.userService.delete(id));
      } 


    public routes(){
        this.router.get('/',this.readUserController);
        this.router.get('/:name',this.filterUserControllerName);
        this.router.get('/:id',this.listUserById);
        this.router.post('/',this.createUserController);
        this.router.delete('/:id', this.delete);
        this.router.get('/list',this.listUser);
    }
}