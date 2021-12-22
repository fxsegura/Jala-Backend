import BasicRepository from "./IBasicRepo";
export default interface Repository<T> extends BasicRepository<T> {

    insert(entity: T);

    update(entity: T);

    get(): T;

    delete(id: string): void;
}