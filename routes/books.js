import express from 'express';

// Import controller functions for handling book-related requests
import {getBooks , createBook ,getBook ,deleteBook , updateBook} from '../controllers/books.js' ;

const router = express.Router();

// Route to get a list of all books -  GET /books
router.get('/', getBooks);

// Route to create a new book - POST /books
router.post('/', createBook);

// Route to get details of a specific book by its ID - GET /books/:id
router.get('/:book_id', getBook);

// Route to delete a book by its ID - DELETE /books/:id
router.delete('/:book_id', deleteBook);

// Route to update a book by its ID - PUT /books/:id
router.put('/:book_id', updateBook);

export default router;
