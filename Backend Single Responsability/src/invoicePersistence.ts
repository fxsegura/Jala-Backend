import Book from "./book";
import Invoice from "./invoice";
export default class InvoicePersistence {

    constructor(
        private book: Book,
        private invoice: Invoice) {
    }


    saveToFile(direc) {
        console.log(`Saved invoice to ${direc} with the following data:`);
        console.log(this.book.getName());
        console.log(this.invoice.getInvoiceTotal());

    }
}