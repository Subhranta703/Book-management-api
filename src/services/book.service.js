"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = require("../models/book.model");
const uuid_1 = require("uuid");
const books = [];
exports.BookService = {
    getAll: () => books,
    getById: (id) => books.find(b => b.id === id),
    create: (data) => {
        const book = { id: (0, uuid_1.v4)(), ...data };
        books.push(book);
        return book;
    },
    update: (id, data) => {
        const book = books.find(b => b.id === id);
        if (!book)
            return null;
        Object.assign(book, data);
        return book;
    },
    delete: (id) => {
        const index = books.findIndex(b => b.id === id);
        if (index === -1)
            return false;
        books.splice(index, 1);
        return true;
    }
};
//# sourceMappingURL=book.service.js.map