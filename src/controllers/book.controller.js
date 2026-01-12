"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const express_1 = require("express");
const book_service_1 = require("../services/book.service");
const csvParser_1 = require("../utils/csvParser");
exports.BookController = {
    getAll: (req, res) => {
        res.json(book_service_1.BookService.getAll());
    },
    getById: (req, res, next) => {
        const book = book_service_1.BookService.getById(req.params.id);
        if (!book)
            return next(new Error("Book not found"));
        res.json(book);
    },
    create: (req, res) => {
        const book = book_service_1.BookService.create(req.body);
        res.status(201).json(book);
    },
    update: (req, res, next) => {
        const book = book_service_1.BookService.update(req.params.id, req.body);
        if (!book)
            return next(new Error("Book not found"));
        res.json(book);
    },
    delete: (req, res, next) => {
        const success = book_service_1.BookService.delete(req.params.id);
        if (!success)
            return next(new Error("Book not found"));
        res.status(204).send();
    },
    importCSV: (req, res) => {
        const content = req.file?.buffer.toString() || "";
        const { results, errors } = (0, csvParser_1.parseCSV)(content);
        results.forEach(b => book_service_1.BookService.create(b));
        res.json({
            added: results.length,
            errors
        });
    }
};
//# sourceMappingURL=book.controller.js.map