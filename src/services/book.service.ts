import { Book } from "../models/book.model";
import { v4 as uuidv4 } from "uuid";

const books: Book[] = [];

export const BookService = {
  getAll: () => books,

  getById: (id: string) => books.find(b => b.id === id),

  create: (data: Omit<Book, "id">) => {
    const book: Book = { id: uuidv4(), ...data };
    books.push(book);
    return book;
  },

  update: (id: string, data: Partial<Omit<Book, "id">>) => {
    const book = books.find(b => b.id === id);
    if (!book) return null;
    Object.assign(book, data);
    return book;
  },

  delete: (id: string) => {
    const index = books.findIndex(b => b.id === id);
    if (index === -1) return false;
    books.splice(index, 1);
    return true;
  }
};
