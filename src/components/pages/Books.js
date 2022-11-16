import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from '../dep/AddNewBook';
import Book from '../dep/Book';
import '../../styles/books.css';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div className="books-container">
      <section className="received-api-books">
        { books.map((book) => (
          <Book
            genre={book.genre}
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
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
