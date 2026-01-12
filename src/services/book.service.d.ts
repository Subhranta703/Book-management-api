import { Book } from "../models/book.model";
export declare const BookService: {
    getAll: () => Book[];
    getById: (id: string) => Book | undefined;
    create: (data: Omit<Book, "id">) => Book;
    update: (id: string, data: Partial<Omit<Book, "id">>) => Book | null;
    delete: (id: string) => boolean;
};
//# sourceMappingURL=book.service.d.ts.map