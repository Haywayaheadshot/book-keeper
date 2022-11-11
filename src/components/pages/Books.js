import React from 'react';
import AddNewBook from '../dep/AddNewBook';
import Book from '../dep/Book';
import './books.css';

function Books() {
  return (
    <div className="books-container">
      <section className="received-api-books">
        <Book title="The Way of Kings" author="Brandon Saunderson" />
        <Book title="The Way of Kings" author="Brandon Saunderson" />
        <Book title="The Way of Kings" author="Brandon Saunderson" />
      </section>
      <AddNewBook />
    </div>
  );
}

export default Books;
