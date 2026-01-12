import type { Request, Response, NextFunction } from "express";
import { BookService } from "../services/book.service";
import { parseCSV } from "../utils/csvParser";

export const BookController = {
  getAll: (req: Request, res: Response) => {
    res.json(BookService.getAll());
  },

  getById: (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const book = BookService.getById(id);

    if (!book) return next(new Error("Book not found"));
    res.json(book);
  },

  create: (req: Request, res: Response) => {
    const book = BookService.create(req.body);
    res.status(201).json(book);
  },

  update: (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const book = BookService.update(id, req.body);

    if (!book) return next(new Error("Book not found"));
    res.json(book);
  },

  delete: (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const success = BookService.delete(id);

    if (!success) return next(new Error("Book not found"));
    res.status(204).send();
  },

  importCSV: (req: Request, res: Response) => {
    const file = req.file as Express.Multer.File | undefined;
    const content = file?.buffer.toString() || "";

    const { results, errors } = parseCSV(content);
    results.forEach(b => BookService.create(b));

    res.json({
      added: results.length,
      errors
    });
  }
};
