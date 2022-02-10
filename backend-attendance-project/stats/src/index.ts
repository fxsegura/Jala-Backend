import { consumeAttendanceQueue } from './attendanceConsume';
import { createSendQueueToUser } from './userSend';

const res= createSendQueueToUser("test");
//const message=consumeAttendanceQueue();