import express from "express";
import {getBook, addBook} from "../controllers/Book.controllers.js";
const router = express.Router();

router.get("/get_book", getBook);
router.post("/add_book", addBook);

export default router;