import User from "./user";
import { INotificationMethods } from "./INotification";
import { INotificationFB } from "./INotificationFB";
import NotificationCenter from "./notificationCenter";

export default class NotificationFB extends NotificationCenter implements INotificationFB{
    constructor(user:User,message:string){
        super(user,message);
    }
    notifyByFB(){
        console.log(`Notify by faceobook message:.....`);
    }

}