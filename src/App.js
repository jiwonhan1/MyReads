import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/SearchPage";
import BooksList from "./components/BookList";
import Head from "./components/Head";

function BooksApp() {
  return (
    <React.Fragment>
      <Head />
      <BrowserRouter>
        <Route path="/" exact component={BooksList} />
        <Route path="/search" exact component={SearchPage} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default BooksApp;
