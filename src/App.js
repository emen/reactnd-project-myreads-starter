import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Bookshelf from "./Bookshelf";
import Search from "./Search";

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  const handleShelfChange = (book) => {
    BooksAPI.update(book, book.shelf);
    setBooks([...books.filter((b) => b.id !== book.id), book]);
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Search onMove={handleShelfChange} myBooks={books} />
          </Route>
          <Route path="/">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf
                    books={books}
                    shelf="Currently Reading"
                    onChange={handleShelfChange}
                  />
                  <Bookshelf
                    books={books}
                    shelf="Want to Read"
                    onChange={handleShelfChange}
                  />
                  <Bookshelf
                    books={books}
                    shelf="Read"
                    onChange={handleShelfChange}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="search"></Link>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default BooksApp;
