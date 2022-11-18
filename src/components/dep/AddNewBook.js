import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, getBooks } from '../../redux/books/Books';
import '../../styles/addNewBook.css';

function AddNewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();
  const uId = uuid();
  const id = uId.slice(0, 8);
  const progress = Math.floor(Math.random() * 100);
  const currentStatus = Math.floor(Math.random() * 10);

  const onChangeTitleHandler = ({ target }) => setTitle(target.value);

  const onChangeAuthorHandler = ({ target }) => setAuthor(target.value);

  const onChangeGenreHandler = ({ target }) => setGenre(target.value);

  const onClickInput = () => {
    const errorMessage = document.querySelector('.error-message');
    if ((title) && (author) && (genre)) {
      errorMessage.style.display = 'none';
      dispatch(addBook({
        id, title, genre, author, progress: `${progress}`, currentStatus: `${currentStatus}`,
      }));
      setAuthor('');
      setTitle('');
      setGenre('');
      setTimeout(() => dispatch(getBooks()), 1000);
    } else {
      errorMessage.style.display = 'block';
    }
  };

  return (
    <>
      <section className="books-authors-inputs-div">
        <p className="error-message">Please fill in Author, Title and Genre sections</p>
        <h2>Add New Book</h2>
        <form className="books-authors-inputs">
          <input
            placeholder="Book Title"
            type="text"
            className="user-inputs"
            value={title}
            onChange={onChangeTitleHandler}
            required
          />
          <input
            placeholder="Author"
            type="text"
            className="user-inputs"
            value={author}
            onChange={onChangeAuthorHandler}
            required
          />
          <select className="user-inputs" name={genre} onChange={onChangeGenreHandler} required>
            <option value="" hidden>Choose Genre</option>
            <option value="Action">Action</option>
            <option value="Suspense">Suspense</option>
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Fiction">Fiction</option>
            <option value="Real Life">Real Life</option>
          </select>
          <button className="add-books" type="button" onClick={onClickInput}>
            Add Book
          </button>
        </form>
      </section>
    </>
  );
}

export default AddNewBook;
