import React from "react";
// import { render } from "react-dom";
import { Link } from "react-router-dom";
import BookDetails from "./Book";
import * as BooksAPI from "../BooksAPI";
//"read" //wantToRead
const BooksList = (props) => {
  const [current_reading, setCurrentReading] = React.useState([]);
  const [want_to_read, setWantToRead] = React.useState([]);
  const [read, setRead] = React.useState([]);
  const [test, setTest] = React.useState(false);

  const classifyBooks = (books) => {
    if (books.shelf === "currentlyReading") {
      setCurrentReading((prev) => [...prev, books]);
    }
    if (books.shelf === "read") {
      setRead((prev) => [...prev, books]);
    }
    if (books.shelf === "wantToRead") {
      setWantToRead((prev) => [...prev, books]);
    }
  };

  React.useEffect(() => {
    getBooks(false);
  }, []);

  const getBooks = (is_updated) => {
    if (is_updated) {
      setCurrentReading([]);
      setWantToRead([]);
      setRead([]);
    }

    BooksAPI.getAll()
      .then((books) =>
        books.forEach((book) => {
          classifyBooks(book);
        })
      )
      .then(() => console.log("hi final"), setTest(true));
  };

  const renderShelf = (books, title) => {
    return (
      <React.Fragment>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book, index) => (
                <BookDetails
                  key={index}
                  book={book}
                  handleBookShelf={handleBookShelf.bind(this)}
                />
              ))}
            </ol>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const handleBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(getBooks(true));
  };
  if (test) {
    return (
      <React.Fragment>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {current_reading &&
              renderShelf(current_reading, "Currently Reading")}
            {want_to_read && renderShelf(want_to_read, "Want To Read")}
            {read && renderShelf(read, "Read")}
          </div>
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
