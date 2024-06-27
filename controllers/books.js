import { v4 as uuidv4 } from 'uuid';

import Book from '../models/books.js';

import bookValidationSchema from '../models/bookValidationSchema.js';

import moment from 'moment';

// let books =[]

// Controller to handle getting a list of books with optional pagination and filtering
export const getBooks  = async (req,res) =>{
    try{
        // Parse query parameters for pagination and filtering
        const page = parseInt(req.query.page) -1 || 0 ;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let author = req.query.author || "All";
        let published_date = req.query.published_date || "All";

         // Construct the query object for MongoDB
        let query = {
            title : { $regex: search, $options: "i"}
        };

        if (author !== "All"){
            query.author = author;
        }

        if (published_date !== "All"){
            query.published_date = published_date;
        }

        // Execute the query with pagination
        const books = await Book.find(query)
                .skip(page*limit)
                .limit(limit);

        if (!books || books.length === 0){
            return res.status(400).json({message: "No books found"});
        }

        // Get the total number of documents matching the query
        const total = await Book.countDocuments(query);
        const totalPages = Math.ceil(total/limit);

        // Return the books along with pagination info
        return res.status(200).json({
            books,
            page:page +1,
            totalPages,
            totalBooks : total
        });
    }catch (err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"});
    }
};

// Controller to handle creating a new book
export const createBook = async (req,res)=>{

    try{
        // Validate the request body
        const {error} =bookValidationSchema(true).validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }
    
    // Destructure the request body
    const {title , author , published_date, isbn, price } = req.body;

     // Format the published_date
    const formatDate=  moment (published_date,'MM-DD-YYYY').toDate();
    
    // Create a new book instance
    const book  = new Book ({
        id: uuidv4(),
        title,
        author,
        published_date: formatDate,
        isbn,
        price
    })
        // Save the book to the database
        await book.save();
        return res.status(201).json({book});
    }catch (err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"});
    }
};

// Controller to handle retrieving a single book by its ID
export const getBook = async(req,res ) => {
    const {id} = req.params;

    try{
        // Find the book by ID
        const book = await Book.findOne({id});
    if (!book){
        return res.status(404).json({message: "No Book Found"});
    }
    return res.status(200).json({book});
    }catch (err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"});
    } 
}

// Controller to handle deleting a book by its ID
export const deleteBook = async (req,res ) =>{
    const {id} = req.params;

    try{
        // Find and delete the book by ID
        const book = await Book.findOneAndDelete({id});
    if (!book){
        return res.status(500).json({message: "Unable To Delete"});
    }
    return res.status(200).json({message:"Successfully Deleted"});
    }catch (err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

// Controller to handle updating a book by its ID
export const updateBook = async (req,res ) =>{
    
    const {id} = req.params;

    try{
        // Validate the request body
        const {error} =bookValidationSchema(false).validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }
    
    let book;

    // Destructure the request body
    const {title, author, published_date, isbn, price } =req.body;
   
    // Construct the update fields object
    const updateFields = {};

    if (title) updateFields.title = title;
    if (author) updateFields.author = author;
    if (published_date) {
        const formatDate=  moment (published_date,'MM-DD-YYYY').toDate();
        updateFields.published_date = formatDate;}
    if (isbn) updateFields.isbn = isbn;
    if (price) updateFields.price = price;

    // Find and update the book by ID
    const options = {new: true};
    
    book = await Book.findOneAndUpdate({id},updateFields,options);  
        
    if (!book){
        return res.status(500).json({message:"Unable to update book"})
    }
    return res.status(200).json({book})
    }catch (err) {
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}