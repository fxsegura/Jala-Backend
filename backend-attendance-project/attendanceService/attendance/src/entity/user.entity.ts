import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column()
    name:string;
    @Column()
    nickname:string;
    @Column()
    numberAttendance:number;
    @Column()
    isDeleted:boolean;
}