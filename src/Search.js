import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const Search = ({ onMove, myBooks }) => {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!term) {
      setBooks([]);
    } else {
      search(term);
    }
  }, [term]);

  function updatedBook(book) {
    const myBook = myBooks.find((b) => b.id === book.id);
    return myBook ? { ...book, shelf: myBook.shelf } : book;
  }

  async function search(term) {
    const results = await BooksAPI.search(term);
    const books = !results || results.error ? [] : results;
    setBooks(books.map(updatedBook));
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onMove={onMove} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
