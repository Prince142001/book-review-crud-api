import express from "express";
import Book from "../models/book.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    console.error("Failed to get books", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/isbn/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const book = await Book.findOne({ isbn });

    if (!book) {
      return res
        .status(404)
        .json({ error: "Cannot find book with this ISBN number" });
    }

    return res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.error("Failed to find book with this ISBN", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/title/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const book = await Book.findOne({ title });
    if (!book) {
      res.status(404).json("Book not found with this title");
    }

    return res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.error("Failed to find book with this title", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { isbn, title, author, reviews } = req.body;
    if (!isbn || !title || !author) {
      return res.status(400).send({ error: "isbn, title, author is required" });
    }
    const newBook = new Book({ isbn, title, author, reviews });
    await newBook.save();
    console.log("New book: ", newBook);
    res.status(201).json(newBook);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "Book already exists with this ISBN number" });
    }
    console.error("Failed to add data in database");
    return res.status(500).json({ error: error.message });
  }
});

router.put("/modify/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const { title, author, reviews } = req.body;
    const book = await Book.findOne({ isbn });

    if (!book) {
      return res
        .status(404)
        .json({ error: "Cannot find book with this ISBN number" });
    }

    if (title) book.title = title;
    if (author) book.author = author;
    if (reviews) book.reviews = reviews;

    await book.save();

    return res.status(200).json({
      success: true,
      message: "Book updated successfully!!",
      data: book,
    });
  } catch (error) {
    console.error("Error on modify book", error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/delete/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const book = await Book.findOne({ isbn });
    if (!book) {
      return res
        .status(404)
        .json({ error: "Cannot find book with this ISBN number" });
    }
    await Book.deleteOne({ isbn });

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.error("Error on deleting book", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
