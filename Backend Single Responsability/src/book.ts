export default class Book {

    constructor(
        private name: string,
        private authorName: string,
        private year: number,
        private price: number,
        private isbn: string) {

    }

    getName() {
        return this.name;
    }
}