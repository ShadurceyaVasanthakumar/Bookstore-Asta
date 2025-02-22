import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import booksRoutes from './routes/books.js' ;

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://username:password@hostname/databaseName?retryWrites=true&w=majority').then (
    ()=>console.log('Connected to database')).catch((err)=>console.log(err));

// Define the port number on which the server will run
const PORT = 5000;

app.use(bodyParser.json());

// Use the books routes for any requests to /books
app.use('/books' , booksRoutes) ;

// Simple route to test if the server is running
app.get('/', (req,res) => res.send('Hello from'));

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server Running on port : http://localhost:${PORT}`));


export default app;