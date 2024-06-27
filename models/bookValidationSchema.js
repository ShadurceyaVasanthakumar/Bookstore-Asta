import Joi from "joi";

// Base schema for validating book fields with custom error messages
const baseSchema = {
    title: Joi.string().messages({
        'string.base' : 'Title should be a type of text',
        'string.empty' :'Title is required',
        'any.required' :'Title is required'
    }),
    author: Joi.string().messages({
        'string.base' : 'Author should be a type of text',
        'string.empty' :'Author is required',
        'any.required' :'Author is required'
    }),
    published_date: Joi.date().messages({
        'date.base' : 'Published date should be a valid date',
        'date.empty' :'Published date is required',
        'any.required' :'Published date is required'
    }),
    isbn: Joi.string().messages({
        'string.base' : 'ISBN  should be a type of text',
        'string.empty' :'ISBN is required',
        'any.required' :'ISBN is required'
    }),
    price: Joi.number().positive().messages({
        'number.base' : 'Price  should be a type of number',
        'number.positive' :'Price should be a positive number',
        'number.empty' :'Price is required',
        'any.required' :'Price is required'
    }),
};

// Function to create a validation schema, optionally requiring all fields for create operations
const bookValidationSchema = (isCreate)=> {
    const schema = {};
    // Loop through each key in the base schema
    for (const key in baseSchema){
        if (isCreate){
            // If creating a new book, make all fields required
            schema[key] =baseSchema[key].required();
        }else {
            // If updating a book, use the base schema as is (fields are optional)
            schema[key]=baseSchema[key];
        }
    }
    // Return a Joi validation object based on the constructed schema
    return Joi.object(schema)
};
    

export default bookValidationSchema;