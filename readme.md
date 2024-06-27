# Bookstore Backend Project

## Overview
This project is a Node.js-based RESTful API for a Bookstore. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The API is designed following REST principles, ensuring clean and efficient interaction with the backend.

## Pre-requisites
- Install [Node.js](https://nodejs.org/en/)
- MongoDB (for database setup)

## Getting Started
1. Clone the repository:

```bash
git clone <https://github.com/ShadurceyaVasanthakumar/Bookstore-Asta.git> Bookstore-Asta
```

2. Install dependencies:

```bash
cd Bookstore-Asta
npm install
```

3. Build and run the project:

```bash
npm start
```

Navigate to `http://localhost:5000` to access the API.

## Database Setup
- Ensure MongoDB is installed and running on your machine or use a cloud-based MongoDB service.

## Project Structure
The folder structure of this app is explained below:

| Name                   | Description                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------------|
| **node_modules**       | Contains all npm dependencies                                                                     |
| **controllers**        | Controllers define functions to serve various express routes                                      |
| **routes**             | Contains all express routes, separated by module/area of application                              |
| **models**             | Models define schemas that will be used in storing and retrieving data from Application database  |
| **index.js**           | Entry point to express app                                                                        |
| **package.json**       | Contains npm dependencies and build scripts                                                       |
| **package-lock.json**  | Config settings for TSLint code style checking                                                    |

## API Endpoints

### Book Endpoints
- **GET /books**: Retrieve a list of all books.
- **GET /books/:id**: Retrieve details of a specific book by its ID.
- **POST /books**: Add a new book to the collection.
- **PUT /books/:id**: Update details of a specific book by its ID.
- **DELETE /books/:id**: Remove a book from the collection by its ID.

### Additional Features
- **GET /books**: 
  - Pagination: Use query parameters `page` and `limit` for pagination.
  - Filtering: Use query parameters `author`, `published_date` to filter results.
  - Search: Use query parameter `search` to search books by title or author.

## Book Data
Each book has the following attributes:
- `id`: Unique identifier (UUID preferred)
- `title`: Title of the book
- `author`: Author of the book
- `published_date`: Date when the book was published
- `isbn`: ISBN number of the book
- `price`: Price of the book

## Functional Requirements
- The API follows REST principles.
- Data is stored using MongoDB.
- Input validation ensures all required fields are provided and valid.
- Appropriate HTTP status codes are returned based on the outcome of the requests.

## Non-Functional Requirements
- The code is clean, readable, and well-organized.
- Basic error handling is included.
- Instructions on how to run and test the API are provided.

## Bonus Features
- Pagination support for the GET /books endpoint.
- Filtering options for the GET /books endpoint (e.g., filter by author or published date).
- Unit tests for key functionalities of the API.

## Running the Application
1. Ensure MongoDB is running on your machine or connect to a cloud-based MongoDB service.
2. Start the application:

```bash
npm start
```

## Testing the API
- Use tools like Postman or Insomnia to test the API endpoints.
- To run unit tests:

```bash
npm test
```

## Example Requests

### Retrieve All Books with Pagination and Filtering

```bash
GET http://localhost:5000/books?page=1&limit=10&author=J.K.Rowling&published_date=1997-06-26
```

### Retrieve a Specific Book by ID

```bash
GET http://localhost:5000/books/60d0fe4f5311236168a109ca
```

### Add a New Book

```bash
POST http://localhost:5000/books
Content-Type: application/json

{
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "J.K. Rowling",
  "published_date": "1997-06-26",
  "isbn": "9780747532699",
  "price": 19.99
}
```

### Update a Book by ID

```bash
PUT http://localhost:5000/books/60d0fe4f5311236168a109ca
Content-Type: application/json

{
  "price": 21.99
}
```

### Delete a Book by ID

```bash
DELETE http://localhost:5000/books/60d0fe4f5311236168a109ca
```

## Conclusion
This project demonstrates a basic setup for a RESTful API using Node.js and MongoDB, following clean code practices and REST principles. With the included bonus features, it offers a robust starting point for a more extensive bookstore application.