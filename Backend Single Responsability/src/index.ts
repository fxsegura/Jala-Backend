import express from "express";
import Book from "./book";
import Invoice from "./invoice";
import InvoicePrinter from "./invoicePrinter";
import InvoicePersistence from "./invoicePersistence";

const book = new Book("Clen Code", "Bob", 1995, 49, "SD-456-ASD");
const invoice = new Invoice(book, 1, 0, 0.14);
const printer = new InvoicePrinter(book,invoice);
const persist = new InvoicePersistence(book,invoice);
invoice.calculateTotal();
printer.printInvoice();
persist.saveToFile("C://User/SomeDirectory/Somefolder");