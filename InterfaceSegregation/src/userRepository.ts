import Repository from "./repository";
import User from './user';

export default class UserRepository implements Repository<User> {

    insert(user: User) {

    }

    update(user: User) {

    }

    get(): User {
        return new User('1');
    }

    delete(id: string): void {

    }
}