import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/book.css';
import RemoveBook from './RemoveBook';

const Book = ({
  id, title, author, progress, genre, currentStatus,
}) => (
  <ul className="new-book-entry-ul">
    <li className="new-book-entry">
      <section>
        <h4>{genre}</h4>
        <h2>{title}</h2>
        <h5>{author}</h5>
        <div className="book-buttons-div">
          <button type="button">Comments</button>
          <RemoveBook id={id} />
          <button type="button">Edit</button>
        </div>
      </section>
      <section>
        <h5>Progress</h5>
        <h4>{progress}</h4>
      </section>
      <section>
        <h5>Current Chapter</h5>
        <h4>
          Chapter
          {currentStatus}
        </h4>
      </section>
    </li>
  </ul>
);
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};
