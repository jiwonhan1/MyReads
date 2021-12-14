import React from "react";
import { Grid, Button } from "../elements";
import Books from "./Books";
import { Link } from "react-router-dom";
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
    BooksAPI.update(book, shelf)
      .then(() => getBooks())
      .then(() => setShelf({ ...shelf }));
  };

  if (shelf) {
    return (
      <React.Fragment>
        {/* <div className="list-books-content"> */}
        <Grid margin="10px">
          <Books books={shelf} handleBookShelf={handleBookShelf.bind(this)} />
          <Link to="/search">
            <Button is_float text="+" />
          </Link>
        </Grid>
      </React.Fragment>
    );
  }
  return null;
};

export default BooksList;
