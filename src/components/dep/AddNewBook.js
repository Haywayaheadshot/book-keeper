import React from 'react';
import './addNewBook.css';

function AddNewBook() {
  return (
    <div>
      <section className="books-authors-inputs-div">
        <h2>Add New Book</h2>
        <form className="books-authors-inputs">
          <input
            placeholder="Book Title"
            type="text"
          />
          <select htmlFor="Category">
            Category
          </select>
          <button className="add-books" type="button">Add Book</button>
        </form>
      </section>
    </div>
  );
}

export default AddNewBook;
