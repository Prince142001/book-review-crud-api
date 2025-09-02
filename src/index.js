import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import booksRouter from "./router/books.js";
import logger from "./middleware/logger.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config({
  path: "./env",
});
connectDB();

app.use(logger);
app.use(express.json());
app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server is listen on the PORT: ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error("Error occured", err.stack);
  res.status(500).json({ error: "Something went wrong on the server!" });
});
