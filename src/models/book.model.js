import mongoose, { Schema } from "mongoose";

const book = new Schema(
  {
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    reviews: {
      type: [
        {
          user: {
            type: String,
          },
          comment: {
            type: String,
          },
          rating: {
            type: Number,
            min: 1,
            max: 5,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", book);

export default Book;
