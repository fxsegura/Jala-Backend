import Book from "./book";
import Invoice from "./invoice";
export default class InvoicePrinter {

    constructor(
        private book: Book,
        private invoice: Invoice) {
    }


    printInvoice() {
        console.log("Printed Invoice");
        console.log(this.invoice.getInvoiceTotal());
        console.log(this.book.getName());
    }
}