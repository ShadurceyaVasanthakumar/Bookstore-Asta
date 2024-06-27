
# Bookstore Backend Project

## Overview
This project is a Node.js-based RESTful API for a Bookstore, designed to facilitate CRUD (Create, Read, Update, Delete) operations on a collection of books. The API adheres to REST principles, ensuring efficient interaction with the backend.

## Prerequisites
- Install [Node.js](https://nodejs.org/en/)
- MongoDB (for database setup)

## Getting Started
1. Clone the repository:

   ```bash
   git clone https://github.com/ShadurceyaVasanthakumar/Bookstore-Asta.git Bookstore-Asta
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
- Ensure MongoDB is installed and running locally or use a cloud-based MongoDB service.

## Project Structure
The folder structure of this application is as follows:

| Name                   | Description                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------------|
| **node_modules/**      | Contains all npm dependencies                                                                     |
| **controllers/**       | Defines functions to handle various express routes                                                 |
| **routes/**            | Contains all express routes, separated by module/area of application                               |
| **models/**            | Defines schemas used for storing and retrieving data from the database                             |
| **index.js**           | Entry point to the express application                                                            |
| **package.json**       | Includes npm dependencies and scripts for build and start                                          |
| **package-lock.json**  | Lock file specifying exact versions of npm dependencies                                            |

## API Endpoints

### Book Endpoints
- **GET /books**: Retrieve a list of all books.
- **GET /books/:id**: Retrieve details of a specific book by its ID.
- **POST /books**: Add a new book to the collection.
- **PUT /books/:id**: Update details of a specific book by its ID.
- **DELETE /books/:id**: Remove a book from the collection by its ID.

### Additional Features
- **GET /books**:
  - **Pagination**: Use query parameters `page` and `limit` for pagination.
  - **Filtering**: Use query parameters `author`, `published_date` to filter results.
  - **Search**: Use query parameter `search` to search books by title or author.

## Book Data Structure
Each book has the following attributes:
- `id`: Unique identifier (UUID preferred)
- `title`: Title of the book
- `author`: Author of the book
- `published_date`: Date when the book was published (MM-DD-YYYY format)
- `isbn`: ISBN number of the book (randomly generated)
- `price`: Price of the book

## Functional Requirements
- The API strictly follows REST principles.
- Data is stored using MongoDB.
- Input validation ensures all required fields are provided and are of valid format.
- HTTP status codes are returned appropriately based on request outcomes.

## Non-Functional Requirements
- Codebase is well-structured, readable, and organized.
- Basic error handling is implemented throughout the application.
- Clear instructions are provided for running and testing the API.

## Bonus Features
- Pagination support for the `GET /books` endpoint.
- Filtering options for the `GET /books` endpoint (e.g., filter by author or published date).
- Unit tests covering key functionalities of the API.

## Running the Application
1. Ensure MongoDB is running locally or accessible via a cloud-based MongoDB service.
2. Start the application:

   ```bash
   npm start
   ```

## Testing the API
- Use tools like Postman or Insomnia to manually test the API endpoints.
- To execute unit tests:

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
This project provides a robust starting point for building a bookstore management system using Node.js and MongoDB. It exemplifies clean code practices, RESTful API design, and includes features such as pagination, filtering, and unit testing for ensuring reliability and scalability.


