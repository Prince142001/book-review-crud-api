# 📚 Book Review CRUD API

A simple **CRUD (Create, Read, Update, Delete)** REST API built with **Node.js, Express** for managing books and their reviews.

---

## 🚀 Features

- Add new books with ISBN, title, and author
- Get all books or find books by ISBN or title
- Update book details and reviews
- Delete a book by ISBN
- Review system with `user`, `comment`, and `rating`
- MongoDB with Mongoose schema validation
- Centralized error handling and logger middleware

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Middleware:** Custom logger
- **Environment Management:** dotenv

---

## 📂 Project Structure

src/ </br>
├── data/ # Initial mock data </br>
│ └── books.js </br>
├── db/ # Database connection </br>
│ └── index.js </br>
├── middleware/ # Custom middlewares </br>
│ └── logger.js </br>
├── models/ # Mongoose models </br>
│ └── book.model.js </br>
├── router/ # Express routers </br>
│ └── books.js </br>
├── constants.js # Constants (DB name, etc.) </br>
├── index.js # App entry point </br>

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```
 ` git clone https://github.com/your-username/book-review-crud.git ` <br>
 ` cd book-review-crud `
```

2. Install dependencies

```
npm install
```

3. Setup environment variables <br>
   Create a .env file in the root directory:

```
PORT=3000
MONGOODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net
```

4, Run the server

```
Run the server
```

5. Run the server

```
http://localhost:3000
```

---

## 📌 API Endpoints

### Books

- GET /books → Get all books
- GET /books/isbn/:isbn → Get a book by ISBN
- GET /books/title/:title → Get a book by title
- POST /books → Add a new book
- PUT /books/modify/:isbn → Update book details
- DELETE /books/delete/:isbn → Delete a book

---

## 📝 Example Request (Add Book)

```
Type: POST
URI: http://localhost:3000/books
Content-Type: application/json
```

## 🛡️ Error Handling

Duplicate ISBN → 400 Book already exists with this ISBN number

Book not found → 404 Cannot find book

Validation errors → 400 Validation failed

Server errors → 500 Something went wrong

## 🧑‍💻 Author

### 👤 **Prince Vishwakarma** | 🌐 [LinkedIn](https://www.linkedin.com/in/zonetocode-92b48b25b/)

Passionate about web development & technology<br>
Loves working with Node.js, MongoDB, and modern JavaScript <br>
