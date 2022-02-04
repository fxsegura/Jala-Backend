import {Entity, ObjectIdColumn, ObjectID, Column, Timestamp} from "typeorm";

@Entity()
export class Attendance {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({ type: 'timestamptz' })
    timeStart: Date;

    @Column({ type: 'timestamptz' })
    timeEnd: Date;

    @Column({ type: 'date' })
    date: string;

    @Column()
    grades: string;

}
