import React from "react";
import BookDetails from "./BookDetails";
import { Grid, Text } from "../elements";
import * as BooksAPI from "../BooksAPI";
const Books = (props) => {
  const books = props.books;
  const [current_reading, setCurrentReading] = React.useState([]);
  const [want_to_read, setWantToRead] = React.useState([]);
  const [read, setRead] = React.useState([]);

  const classifyBooks = () => {
    const currentReadings = books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    setCurrentReading(currentReadings);
    const reads = books.filter((book) => book.shelf === "read");
    setRead(reads);

    const wantToReads = books.filter((book) => book.shelf === "wantToRead");
    setWantToRead(wantToReads);
  };

  React.useEffect(
    () => {
      if (books && books.length > 0) {
        classifyBooks();
      }
    },
    [books]
  );

  const renderShelf = (books, title) => {
    return (
      <React.Fragment>
        <div className="bookshelf">
          <Text bold size="20px" border_bottom>
            {title}
          </Text>
          <Grid center>
            <Grid is_flex>
              {books.map((book, index) => (
                <BookDetails
                  key={index}
                  book={book}
                  handleBookShelf={props.handleBookShelf.bind(this)}
                />
              ))}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  };

  if (current_reading && want_to_read && read) {
    return (
      <React.Fragment>
        {current_reading && renderShelf(current_reading, "Currently Reading")}
        {want_to_read && renderShelf(want_to_read, "Want To Read")}
        {read && renderShelf(read, "Read")}
      </React.Fragment>
    );
  }
  return null;
};

export default Books;
