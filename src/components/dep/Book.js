import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

const Book = ({ title, author }) => (
  <ul className="new-book-entry-ul">
    <li className="new-book-entry">
      <h2>{title}</h2>
      <p>{author}</p>
    </li>
  </ul>
);
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
