import React from 'react';
import AddNewBook from '../dep/AddNewBook';
import './books.css';

function Books() {
  return (
    <div className="books-container">
      <section className="received-api-books">
        <ul className="new-book-entry-ul">
          <li className="new-book-entry">New Book</li>
          <li className="new-book-entry">New Book</li>
          <li className="new-book-entry">New Book</li>
          <li className="new-book-entry">New Book</li>
        </ul>
      </section>
      <AddNewBook />
    </div>
  );
}

export default Books;
