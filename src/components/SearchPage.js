import React from "react";
import { Link, useHistory } from "react-router-dom";
import BookDetails from "./BookDetails";
import * as BooksAPI from "../BooksAPI";

const SearchPage = (props) => {
  const [query, setQuery] = React.useState("");
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    if (props.books) {
      setBooks(props.books);
    }
  }, []);

  const handleUpdateQuery = (query) => {
    BooksAPI.search(query).then(
      (books) => (books ? setBooks(books) : setBooks([])),
      setQuery(query)
    );
  };

  const history = useHistory();

  const handleBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() =>
        shelf !== "none"
          ? alert(`${book.title} has benn added to your shelf!`)
          : null
      )
      .then(() => history.push("/"))
      .catch(() =>
        alert("Something went wrong!").then(() => history.push("/"))
      );
  };

  const renderSearchResult = () => {
    if (query) {
      return books.error ? (
        <div>No results Found</div>
      ) : (
        books.map((book, index) => {
          return (
            <BookDetails
              key={index}
              book={book}
              handleBookShelf={handleBookShelf.bind(this)}
            />
          );
        })
      );
    }
  };

  return (
    <React.Fragment>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => handleUpdateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{renderSearchResult()}</ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchPage;
