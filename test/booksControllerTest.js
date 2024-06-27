import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js'; 

describe('GET /books', () => {
  it('should retrieve all books with pagination and filtering', async () => {
    const res = await request(app)
      .get('/books')
      .query({ page: 1, limit: 5 });

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.books).to.be.an('array');
    expect(res.body.page).to.equal(1);
    expect(res.body.totalPages).to.be.greaterThan(0);
    expect(res.body.totalBooks).to.be.greaterThan(0);
  });
});

describe('GET /books/:id', () => {
  it('should retrieve a specific book by ID', async () => {
    const res = await request(app)
      .get('/books/e4c7809f-f096-4217-a97c-16842b78e70e'); 

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.book).to.have.property('id', 'e4c7809f-f096-4217-a97c-16842b78e70e');
  });

  it('should return 404 if book ID does not exist', async () => {
    const res = await request(app)
      .get('/books/nonexistingid'); // Invalid book ID

    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('message', 'No Book Found');
  });
});

describe('DELETE /books/:id', () => {
  it('should delete a specific book by ID', async () => {
    const res = await request(app)
      .delete('/books/e4c7809f-f096-4217-a97c-16842b78e70e'); 

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Successfully Deleted');
  });

  it('should return 500 if book ID does not exist', async () => {
    const res = await request(app)
      .delete('/books/nonexistingid'); // Invalid book ID

    expect(res.status).to.equal(500);
    expect(res.body).to.have.property('message', 'Unable To Delete');
  });
});

describe('PUT /books/:id', () => {
  it('should update a specific book by ID', async () => {
    const res = await request(app)
      .put('/books/e4c7809f-f096-4217-a97c-16842b78e70e') 
      .send({
        price: 21.99
      });

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.book.price).to.equal(21.99);
  });

  it('should return 400 if request body is invalid', async () => {
    const res = await request(app)
      .put('/books/e4c7809f-f096-4217-a97c-16842b78e70e') 
      .send({
        // Invalid request body
      });

    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('message', 'validation error');
  });

  it('should return 500 if book ID does not exist', async () => {
    const res = await request(app)
      .put('/books/nonexistingid') // Invalid book ID
      .send({
        price: 21.99
      });

    expect(res.status).to.equal(500);
    expect(res.body).to.have.property('message', 'Unable to update book');
  });
});
