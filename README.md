# Book Management REST API

A simple, production-style Book Management REST API built using **Node.js**, **TypeScript**, and **Express**.  
This project demonstrates clean architecture, RESTful design, manual CSV parsing, and basic backend best practices.

It was implemented as part of a technical task to showcase backend design, validation logic, and API structure.

---

## 🚀 Features

- CRUD operations for books
- UUID-based unique identifiers
- Bulk import via CSV with **manual parsing and validation**
- Centralized error handling
- Request logging using `morgan`
- Type-safe implementation with TypeScript
- Environment-based configuration
- Clean MVC / service-based structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- Morgan (logging)
- Multer (file upload)
- UUID

---

## 📁 Project Structure
src/
├── app.ts
├── server.ts
├── routes/
├── controllers/
├── services/
├── models/
├── middlewares/
└── utils/
samples/
└── books.csv


---

## ⚙️ Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/book-management-api.git
cd book-management-api

2. Install dependencies
npm install

3. Create .env
PORT=3000

4. Build the project
npm run build

5. Start the server
npm start


Server will run at:
http://localhost:3000





## Bulk Import

Use the endpoint:

POST /books/import

- Content-Type: multipart/form-data
- Field name: file
- File format (CSV):

title,author,publishedYear

Example:
The Pragmatic Programmer,Andrew Hunt,1999
Clean Architecture,Robert C. Martin,2017

The API will:
- Parse the CSV manually
- Validate each row
- Add valid books
- Return invalid rows with error details
