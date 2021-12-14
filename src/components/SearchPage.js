import React from "react";
import { Link, useHistory } from "react-router-dom";
import BookDetails from "./BookDetails";
import * as BooksAPI from "../BooksAPI";

const SearchPage = (props) => {
  const current_shelf = props.current_shelf;
  console.log(current_shelf);
  const [query, setQuery] = React.useState("");
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    if (props.books) {
      setBooks(props.books);
    }
  }, []);

  const handleUpdateQuery = (query) => {
    BooksAPI.search(query).then((books) => {
      console.log(books);
      if (!Array.isArray(books)) {
        setBooks([]);
      } else {
        books.map((book) => {
          let thisBookInshelf = current_shelf.find(
            (item) => item.id == book.id
          );
          if (thisBookInshelf) {
            book.shelf = thisBookInshelf.shelf;
            return book;
          } else {
            book.shelf = "none";
            return book;
          }
        });
        setBooks(books);
      }
      setQuery(query);
    });
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
    console.log(books);
    if (query) {
      return books.length == 0 ? (
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
