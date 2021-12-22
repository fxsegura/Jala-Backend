import EventLog from "./eventLog";
import Repository from "./repository";
import User from './user';
import BasicRepository from "./IBasicRepo";
export default class LogRepository implements BasicRepository<EventLog> {

    get(): EventLog {
        return new EventLog('1', 'test message');
    }

}