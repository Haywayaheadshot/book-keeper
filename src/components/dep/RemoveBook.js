import React from 'react';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../../redux/books/Books';

const RemoveBook = (id) => {
  const dispatch = useDispatch();
  const index = id;
  const convertedId = index.id;
  const onClickRemove = () => {
    dispatch(removeBook(convertedId));
    setTimeout(() => dispatch(getBooks()), 100);
  };
  return (
    <button className="comment-edit-remove-btn" type="button" onClick={onClickRemove} id={convertedId}>
      Remove
    </button>
  );
};

export default RemoveBook;
