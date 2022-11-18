import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import RemoveBook from './RemoveBook';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, author, progress, genre, currentStatus,
}) => (
  <ul className="new-book-entry-ul">
    <li className="new-book-entry">
      <section>
        <h4 className="genre-text">{genre}</h4>
        <h2 className="title-text">{title}</h2>
        <h5 className="author-text">{author}</h5>
        <div className="book-buttons-div">
          <button className="comment-edit-remove-btn" type="button">Comments</button>
          <RemoveBook id={id} />
          <button className="comment-edit-remove-btn" type="button">Edit</button>
        </div>
      </section>
      <section className="progress-section">
        <h5 className="for-phone">Progress</h5>
        <CircularProgressbar className="progress-bar" value={progress} text={`${progress}%`} />
        <span className="progress-percentage-div">
          <h4 className="progress-percentage">
            {progress}
            %
          </h4>
          <h6 className="progress-percentage-text">Completed</h6>
        </span>
      </section>
      <section className="current-chapter-section">
        <span>
          <h5 className="current-chap-text">Current Chapter</h5>
          <h4 className="current-chap-text">
            Chapter
            {currentStatus}
          </h4>
        </span>
        <button className="update-status-button" type="button">UPDATE STATUS</button>
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
