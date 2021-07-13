export const addBook = (id) => ({
  type: "ADD_BOOK",
  payload: { id },
});

export const removeBook = (id) => ({
  type: "REMOVE_BOOK",
  payload: { id },
});

export const fetchBooks = (updatedBooks) => ({
  type: "FETCH_BOOKS",
  payload: { updatedBooks },
});
