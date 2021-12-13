import React from "react";

const BookDetails = (props) => {
  const book = props.book;
  return (
    <React.Fragment>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 135,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks ? book.imageLinks.thumbnail : null
                })`,
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={(e) => props.handleBookShelf(book, e.target.value)}
                value={book.shelf}
              >
                <option value="none" disabled>
                  {" "}
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default BookDetails;
