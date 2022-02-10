import { Connection, createConnection, getConnection, getConnectionManager, getConnectionOptions, QueryRunner } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repository/user.repository";

export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = getConnection().getCustomRepository(UserRepository);
    }



    public readUserService = async () => {
        const users = await this.userRepository.find();
        return users;
    }

    public filterUserService = async (name:string) => {
        const users = await this.userRepository.find({name: name});
        //const filterResult= 
        
        return users;
    }

    public filterUserById = async (id:string) => {
        const users = await this.userRepository.find({id: id});
        //const filterResult= 
        
        return users;
    }

    public createUserService = async (user: UserEntity) => {
        const newUser = await this.userRepository.save(user);
        return newUser;
    }

    public delete = async (id: string) => {
        const deletedUser = await this.userRepository.delete(id);
        return deletedUser;
      } 

}