import React from 'react';
import './addNewBook.css';

function AddNewBook() {
  return (
    <div>
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

export default AddNewBook;
