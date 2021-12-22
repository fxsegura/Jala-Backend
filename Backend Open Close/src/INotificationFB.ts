import { INotificationMethods } from "./INotification";

export interface INotificationFB extends INotificationMethods {
    notifyByFB(): void;
}