import Book from "./book";

export default class Invoice {

    private total: number;
    constructor(
        private book: Book,
        private quantity: number,
        private discountRate: number,
        private taxRate: number) {
    }

    calculateTotal() {
        console.log(`${this.book.getName()} Invoice quantity: ${this.quantity}`);
        console.log(`Discount Rate: ${this.discountRate}`);
        console.log(`Tax Rate: ${this.taxRate}`);
        console.log(`TOTAL: ${this.total}`);
    }
    getInvoiceTotal(){
        return this.total;
    }
}