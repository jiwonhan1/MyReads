import React from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import * as BooksAPI from "../BooksAPI";

const BooksList = (props) => {
  const [shelf, setShelf] = React.useState({});

  React.useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    BooksAPI.getAll().then((books) => setShelf(books));
  };

  const handleBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(getBooks());
  };
  if (shelf) {
    return (
      <React.Fragment>
        <div className="list-books-content">
          <Books books={shelf} handleBookShelf={handleBookShelf.bind(this)} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </React.Fragment>
    );
  }
  return null;
};

export default BooksList;
