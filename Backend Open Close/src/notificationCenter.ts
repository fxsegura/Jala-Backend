import User from "./user";
import { INotificationMethods } from "./INotification";

export default class NotificationCenter implements INotificationMethods{
    constructor(private user:User,private message:string){}
    notifyByEmail(){
        console.log(`Notify by email ${this.user.name} message: ${this.message}.....`);
    }
    notifyByText(){
        console.log(`Notify by SMS ${this.user.name} message: ${this.message}.....`);
    }
}