const ADD_BOOK = 'book-keeper/src/redux/books/addBook';
const REMOVE_BOOK = 'book-keeper/src/redux/books/removeBook';

export const addBook = () => (
  {
    type: ADD_BOOK,
    payload: test,
  }
);

export const removeBook = () => (
  {
    type: REMOVE_BOOK,
    payload: test,
  }
);

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          payload: action.payload,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}