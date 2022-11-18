import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNewBook from '../dep/AddNewBook';
import Book from '../dep/Book';
import '../../styles/books.css';
import { getBooks } from '../../redux/books/Books';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="books-container">
      <section className="received-api-books">
        { books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            genre={book.category}
            progress={book.progress}
            currentStatus={book.currentStatus}
          />
        ))}
      </section>
      <AddNewBook />
    </div>
  );
}

export default Books;
