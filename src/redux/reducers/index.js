import actionTypes from "../action-types";

const initialState = {
  books: [],
  cart: [],
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS: {
      const { updatedBooks } = action.payload;
      return {
        ...state,
        books: [...state.books, ...updatedBooks],
      };
    }
    case actionTypes.ADD_BOOK: {
      const { id } = action.payload;
      return {
        ...state,
        books: [...state.books, ...updatedBooks],
      };
    }
    default:
      return state;
  }
};

export default books;
