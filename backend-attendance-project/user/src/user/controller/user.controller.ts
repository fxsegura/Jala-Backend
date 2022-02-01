import { Router, Response, Request } from "express";
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
        this.router.post('/',this.createUserController);
        this.router.delete('/:id', this.delete);
    }
}