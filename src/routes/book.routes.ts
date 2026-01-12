import { Router } from "express";
import multer from "multer";
import { BookController } from "../controllers/book.controller";

const router = Router();
const upload = multer();

router.get("/", BookController.getAll);
router.get("/:id", BookController.getById);
router.post("/", BookController.create);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);
router.post("/import", upload.single("file"), BookController.importCSV);

export default router;
