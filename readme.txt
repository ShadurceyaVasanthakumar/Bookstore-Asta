#Node.js Backend Bookstore Project

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) 

# Getting started
- Clone the repository

git clone  <https://github.com/ShadurceyaVasanthakumar/Bookstore-Asta.git> <Bookstore-Asta>

- Install dependencies

cd Bookstore-Asta
npm install

- Build and run the project

npm start

## Database Setup
- MongoDB

## Schema
- Books Collection


  Navigate to `http://localhost:5000`

- API Document endpoints



# Node + RESTFul API 
The main purpose of this repository is to show a project setup and workflow 


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | ---------------------------------------------------------------------------------------------------|
| **node_modules**         | Contains all  npm dependencies                                                                     |
| **controllers**          | Controllers define functions to serve various express routes.                                      |
| **routes**               | Contain all express routes, separated by module/area of application                                |
| **models**               | Models define schemas that will be used in storing and retrieving data from Application database   |
| **index.js**             | Entry point to express app                                                                         |
| package.json             | Contains npm dependencies and build scripts                                                        |
| package-lock.json        | Config settings for TSLint code style checking                                                     |


## API Document Endpoints
- `/books` : Get all books, Create a new book
- `/books/:book_id` : Get, Update, Delete a specific book by its ID



