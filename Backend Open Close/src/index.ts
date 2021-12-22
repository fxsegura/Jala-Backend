import User from './user';
import NotificationCenter from './notificationCenter';
import NotificationFB from './newNotifMethodFB';

const user = new User('Bob');
const notifCenter = new NotificationCenter(user,'Test Message');
const notifFB= new NotificationFB(user, "Test Message");
notifCenter.notifyByEmail();
notifFB.notifyByFB();
debugger