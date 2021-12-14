import React from "react";
import { Grid, Image, Text, Button } from "../elements";

const BookDetails = (props) => {
  const book = props.book;
  return (
    <React.Fragment>
      <Grid is_flex_column width={350} height={260}>
        <Image
          src={book.imageLinks ? book.imageLinks.thumbnail : null}
          width={135}
          height={193}
        />
        <Button
          right={10}
          bottom={0}
          size={40}
          src={"https://img.icons8.com/ios-filled/50/000000/sort-down.png"}
        >
          <select
            style={{
              opacity: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            onChange={(e) => props.handleBookShelf(book, e.target.value)}
            value={book.shelf}
          >
            <option disabled> Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </Button>
        <Text margin="0">{book.title}</Text>
        <Text margin="0" color="#999">
          {book.authors}
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default BookDetails;
