import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/SearchPage";
import BooksList from "./components/BookList";
import Head from "./components/Head";
import * as BooksAPI from "./BooksAPI";

function BooksApp() {
  const [shelf, setShelf] = React.useState({});

  React.useEffect(() => {
    getBooks();
    console.log("hi");
  }, []);

  const getBooks = () => {
    BooksAPI.getAll().then((books) => setShelf(books));
  };

  const handleBookShelf = (book, shelf) => {
    console.log(book);
    console.log(shelf);
    BooksAPI.update(book, shelf)
      .then(() => getBooks())
      .then(() => setShelf({ ...shelf }));
  };
  if (shelf) {
    return (
      <React.Fragment>
        <Head />
        <BrowserRouter>
          <Route path="/" exact>
            <BooksList shelf={shelf} handleBookShelf={handleBookShelf} />
          </Route>
          <Route path="/search" exact>
            <SearchPage current_shelf={shelf} />
          </Route>
        </BrowserRouter>
      </React.Fragment>
    );
  }
  return null;
}

export default BooksApp;
