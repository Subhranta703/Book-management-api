import { Request, Response, NextFunction } from "express";
export declare const BookController: {
    getAll: (req: Request, res: Response) => void;
    getById: (req: Request, res: Response, next: NextFunction) => void;
    create: (req: Request, res: Response) => void;
    update: (req: Request, res: Response, next: NextFunction) => void;
    delete: (req: Request, res: Response, next: NextFunction) => void;
    importCSV: (req: Request, res: Response) => void;
};
//# sourceMappingURL=book.controller.d.ts.map