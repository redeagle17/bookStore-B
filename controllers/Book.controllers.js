import Book from "../models/Book.models.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const addBook = async (req, res) => {
    const book = req.body;
    const newBook = new Book(book);
    try {
        const result = await newBook.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}