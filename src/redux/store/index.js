import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import books from "../reducers";

const store = createStore(books, composeWithDevTools());

export default store;
