import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/Books';
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
    dispatch(addBook({
      id, title, genre, author, progress: `${progress}%`, currentStatus: `${currentStatus}`,
    }));
    setAuthor('');
    setTitle('');
    setGenre('');
  };

  return (
    <div>
      <section className="books-authors-inputs-div">
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
          <input
            placeholder="Genre"
            className="user-inputs"
            type="text"
            value={genre}
            onChange={onChangeGenreHandler}
            required
          />
          <button className="add-books" type="button" onClick={onClickInput}>Add Book</button>
        </form>
      </section>
    </div>
  );
}

export default AddNewBook;
