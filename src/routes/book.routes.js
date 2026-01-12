"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const book_controller_1 = require("../controllers/book.controller");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
router.get("/", book_controller_1.BookController.getAll);
router.get("/:id", book_controller_1.BookController.getById);
router.post("/", book_controller_1.BookController.create);
router.put("/:id", book_controller_1.BookController.update);
router.delete("/:id", book_controller_1.BookController.delete);
router.post("/import", upload.single("file"), book_controller_1.BookController.importCSV);
exports.default = router;
//# sourceMappingURL=book.routes.js.map