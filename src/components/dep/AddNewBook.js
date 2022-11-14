import React from 'react';
import '../../styles/addNewBook.css';

function AddNewBook() {
  return (
    <div>
      <section className="books-authors-inputs-div">
        <h2>Add New Book</h2>
        <form className="books-authors-inputs">
          <input
            placeholder="Book Title"
            type="text"
            className="user-inputs"
          />
          <input
            placeholder="Author"
            type="text"
            className="user-inputs"
          />
          <select placeholder="Category">
            <option>-</option>
            <option>Suspense</option>
            <option>Action</option>
            <option>Romance</option>
          </select>
          <button className="add-books" type="button">Add Book</button>
        </form>
      </section>
    </div>
  );
}

export default AddNewBook;
