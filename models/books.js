import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const Schema = mongoose.Schema;

//Schema for the Book model
const bookSchema = new Schema({
    // Unique identifier for each book, default is a UUID
    id:{
        type: String,
        default: uuidv4,
        unique: true
    },
    // Title of the book, required field
    title:{
        type: String,
        required: true
    },
    // Author of the book, required field, indexed for faster search
    author:{
        type: String,
        required: true,
        index:true
    },
    // Published date of the book, required field
    published_date:{
        type: Date,
        required: true
    },
    // ISBN number of the book, required and must be unique
    isbn:{
        type: String,
        required: true
        
    },
    // Price of the book, required field
    price:{
        type: Number,
        required: true
    }

})
// Export the Book model based on the bookSchema
export default mongoose.model("Book", bookSchema);