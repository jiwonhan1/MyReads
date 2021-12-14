import React from "react";
import { Grid, Button } from "../elements";
import Books from "./Books";
import { Link } from "react-router-dom";

const BooksList = (props) => {
  const shelf = props.shelf;
  const handleBookShelf = props.handleBookShelf;

  if (props.shelf) {
    return (
      <React.Fragment>
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
