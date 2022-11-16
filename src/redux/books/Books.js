const ADD_BOOK = 'book-keeper/src/redux/books/addBook';
const REMOVE_BOOK = 'book-keeper/src/redux/books/removeBook';

const defaultState = [
  {
    id: 'dshsd1',
    title: 'Legend Of The Seeker',
    author: 'Terry Goodkind',
    progress: '64%',
    currentStatus: '17',
    genre: 'Thriller',
  },
  {
    id: 'dsdsd2',
    title: 'Mr and Mrs Smith',
    author: 'Simon Kinberg',
    progress: '8%',
    currentStatus: '3',
    genre: 'Action/Romance',
  },
  {
    id: 'dsdwew3',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    progress: '99%',
    currentStatus: '24',
    genre: 'Action',

  },
];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          progress: action.progress,
          currentStatus: action.currentStatus,
          genre: action.genre,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// action creators for add and remove books

export const addBook = (payload) => ({
  type: ADD_BOOK,
  id: payload.id,
  title: payload.title,
  author: payload.author,
  progress: payload.progress,
  currentStatus: payload.currentStatus,
  genre: payload.genre,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  id: payload.id,
});
