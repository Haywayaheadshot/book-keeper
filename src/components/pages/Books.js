import React from 'react';
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
      <section className="books-authors-inputs">
        <input
          placeholder="Book Title"
          type="text"
        />
        <input
          placeholder="Author"
          type="text"
        />
        <button className="add-books" type="button">Add Book</button>
      </section>
    </div>
  );
}

export default Books;
