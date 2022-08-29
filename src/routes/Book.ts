import express from "express";
import controller from "../controllers/Book";
import { Schemas, ValidateJoi } from "../middleware/Joi";

const router = express.Router();

router.post("/create", ValidateJoi(Schemas.book.create), controller.createBook);
router.get("/get/:bookId", controller.readBook);
router.get("/get", controller.readallBook);
router.patch("/update/:bookId", ValidateJoi(Schemas.author.update), controller.updateBook);
router.delete("/delete/:bookId", controller.deleteBook);

export = router;
