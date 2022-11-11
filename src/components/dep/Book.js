import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

const Book = ({ title, author }) => (
  <ul className="new-book-entry-ul">
    <li className="new-book-entry">
      <section>
        <h4>Genre-Holder</h4>
        <h2>{title}</h2>
        <h5>{author}</h5>
        <div className="book-buttons-div">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </section>
      <section>
        <h5>Progress</h5>
      </section>
      <section>
        <h5>Current Status</h5>
      </section>
    </li>
  </ul>
);
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
